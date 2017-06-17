/**
 * A service that retrieves achievements information from the API.
 * @final
 */
class AchievementsService {
  /**
   * @param {!angular.$http} $http
   */
  constructor($http) {
    /** @private {!angular.$http} */
    this.http_ = $http;
  }

  /**
   * Gets the daily achievements from the API.
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getDailyAchievements() {
    return this.http_.get(constants.GwApiPath.DAILY_ACHIEVEMENTS)
        .then((response) => response.data);
  }

  /**
   * Gets detailed achievement information from the API.
   * @param {!Array<number>} achievementIds
   * @return {!Map<number, !Object>}
   */
  getAchievementInformation(achievementIds) {
    const path = constants.GwApiPath.ACHIEVEMENTS + '?' +
        constants.ApiParams.IDS + '=' + achievementIds.join();

    const mapping = new Map();

    return this.http_.get(path)
        .then((response) => {
          response.data.forEach((achievement) => {
            mapping.set(achievement.id, achievement);
          });

          return mapping;
        });
  }
}

angular.module('mainApp.services.achievements', [])
    .service('achievementsService', AchievementsService);
