/**
 * A service that retrieves worlds from the API.
 * @final
 */
class WorldsService {
  /**
   * @param {!angular.$http} $http
   */
  constructor($http) {
    this.http_ = $http;
  }

  /**
   * Gets the worlds from the API.
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getWorlds() {
    const path = constants.GwApiPath.WORLDS + '?' +
        constants.ApiParams.WORLD_IDS + '=' + constants.ALL;

    return this.http_.get(path).then(
        (response) => response.data);
  }
}

angular.module('mainApp.services.worlds', [])
    .service('worldsService', WorldsService);