/**
 * Controller for the achievements.html page.
 * @final
 */
class AchievementsCtrl {
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
    this.achievementsService_.getDailyAchievements()
        .then((dailies) => {
          const achievementIds = [];

          Object.keys(dailies).forEach((type) => {
            dailies[type].forEach((daily) => {
              achievementIds.push(daily.id);
            });
          });

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

        if (achievementInfo.rewards[0].type === constants.RewardType.ITEM) {
          const request = this.itemsService_.getItemInformation(
              achievementInfo.rewards[0].id);
          requests.push(request);
          request.then((response) => {
            this.dailyAchievements.push(
                new Achievement(
                    daily.id, type, daily.level, achievementInfo,
                    response.name));
          });
        } else {
          this.dailyAchievements.push(
              new Achievement(
                  daily.id, type, daily.level, achievementInfo));
        }
      });
    });

    this.q_.all(requests).then(() => deferred.resolve());

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

class Achievement {
  /**
   * @param {number} id
   * @param {string} type
   * @param {!Object} levelInfo
   * @param {!Object} achievementInfo
   * @param {string=} rewardItem
   */
  constructor(id, type, levelInfo, achievementInfo, rewardItem = '') {
    /**
     * The type of achievement (PvE, PvP, etc.).
     * @type {string}
     */
    this.type = this.formatType_(type);

    /** @type {number} */
    this.id = id;

    /** @type {!Object} */
    this.level = {
      min: levelInfo.min,
      max: levelInfo.max,
    };

    /** @type {!Object} */
    this.achievementInfo = achievementInfo;

    this.rewardItem = rewardItem;
  }

  /**
   * Formats the type.
   * @param {string} type
   * @return {string}
   * @private
   */
  formatType_(type) {
    let formattedType;

    switch (type) {
      case 'pve':
        formattedType = 'PvE';
        break;
      case 'pvp':
        formattedType = 'PvP';
        break;
      case 'wvw':
        formattedType = 'WvW';
        break;
      case 'fractals':
        formattedType = 'Fractals';
        break;
      default:
        formattedType = type;
        break;
    }

    return formattedType;
  }
};

angular.module('mainApp.controllers.achievements', [])
    .controller('achievementsCtrl', AchievementsCtrl);
