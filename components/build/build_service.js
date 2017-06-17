/**
 * A service that retrieves the build number from the API.
 * @final
 */
class BuildService {
  /**
   * @param {!angular.$http} $http
   */
  constructor($http) {
    this.http_ = $http;
  }

  /**
   * Gets the build number from the API.
   * @return {!angular.$q.Promise<number>}
   */
  getBuild() {
    return this.http_.get(constants.GwApiPath.BUILD).then(
        (response) => response.data.id);
  }
}

angular.module('mainApp.services.build', [])
    .service('buildService', BuildService);