/**
 * Controller for the daily_achievements.html page.
 * @final
 */
class DailyAchievementsCtrl {
  /**
   * @param {!angular.$q} $q
   * @param {!mainApp.services.achievements.AchievementsService}
   *     achievementsService
   * @param {!mainApp.services.items.ItemsService} itemsService
   */
  constructor($q, achievementsService, itemsService) {
    /** @private {!angular.$q} */
    this.q_ = $q;

    /** @private {!mainApp.services.worlds.AchievementsService} */
    this.achievementsService_ = achievementsService;

    /** @private {!mainApp.services.items.ItemsService} */
    this.itemsService_ = itemsService;

    /** @type {!Array<!Object>} */
    this.dailyAchievements;

    this.isReady = false;

    this.getDailyAchievements();
  }

  getDailyAchievements() {
    // Retrieves the daily achievement IDs
    this.achievementsService_.getDailyAchievements()
        .then((dailies) => {
          const achievementIds = [];

          // Puts all the achievement IDs into an array to pass to the service.
          Object.keys(dailies).forEach((type) => {
            dailies[type].forEach((daily) => {
              achievementIds.push(daily.id);
            });
          });

          // Gets detailed achievement information.
          this.achievementsService_.getAchievementInformation(achievementIds)
              .then((achievementInfo) => {
                this.populateDailyAchievements_(dailies, achievementInfo)
                    .then(() => this.sortDailyAchievements_());
              });
        });
  }

  /**
   * Populates daily achievements.
   * @param {!Array<!Object>} dailies
   * @param {!Map<number, !Object>} achievementInfoMap
   * @return {!angular.$q.Promise}
   */
  populateDailyAchievements_(dailies, achievementInfoMap) {
    const deferred = this.q_.defer();
    const requests = [];
    this.dailyAchievements = [];

    Object.keys(dailies).forEach((type) => {
      dailies[type].forEach((daily) => {
        const achievementInfo = achievementInfoMap.get(daily.id);
        const request = this.retrieveRewards_(achievementInfo.rewards);
        requests.push(request);

        request.then((reward) => {
          this.dailyAchievements.push(
              new Achievement(
                  daily.id, type, daily.level, achievementInfo, reward));
        });
      });
    });

    this.q_.all(requests).then(() => deferred.resolve());

    return deferred.promise;
  }

  /**
   * Retrieves rewards.
   * @param {!Object} rewards
   * @return {!angular.$q.Promise<!AchievementReward>}
   */
  retrieveRewards_(rewards) {
    const deferred = this.q_.defer();
    const requests = [];
    const achievementReward = new AchievementReward();

    rewards.forEach((reward) => {
      if (reward.type === constants.RewardType.ITEM) {
        const request = this.itemsService_.getItemInformation(reward.id);
        requests.push(request);
        request.then((response) => {
          achievementReward.item = response;
        });
      }

      if (reward.type === constants.RewardType.COINS) {
        const request = this.q_.when(reward.count);
        requests.push(request);
        request.then(achievementReward.coins = reward.count);
      }
    });

    this.q_.all(requests).then(() => deferred.resolve(achievementReward));

    return deferred.promise;
  }

  /**
   * Sorts the daily achievements.
   * @private
   */
  sortDailyAchievements_() {
    this.dailyAchievements.sort((a, b) => {
      const levelMinDiff = a.level.min - b.level.min;
      const levelMaxDiff = a.level.max - b.level.max;

      if (a.type < b.type) {
        return -1;
      } else if (a.type > b.type) {
        return 1;
      } else {
        if (levelMinDiff < 0) {
          return -1;
        } else if (levelMinDiff > 0) {
          return 1;
        } else {
          if (levelMaxDiff < 0) {
            return -1;
          } else if (levelMaxDiff > 0) {
            return 1;
          } else {
            if (a.achievementInfo.name < b.achievementInfo.name) {
              return -1;
            } else if (a.achievementInfo.name >
                       b.achievementInfo.name) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      }
    });

    this.isReady = true;
  }
}

angular.module('mainApp.controllers.dailyAchievements', [])
    .controller('dailyAchievementsCtrl', DailyAchievementsCtrl);
