/**
 * A service that retrieves worlds from the API.
 * @final
 */
class WorldsService {
  /**
   * @param {!angular.$http} $http
   * @param {!angular.$q} $q
   */
  constructor($http, $q) {
    /** @private {!angular.$http} */
    this.http_ = $http;

    /** @private {!angular.$q} */
    this.q_ = $q;

    /** @private {!Array<!Object>} */
    this.worlds_;
  }

  /**
   * Retrieves and returns the worlds from the API or the cached response.
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getWorlds() {
    if (this.worlds_) {
      return this.q_.when(this.worlds_);
    }

    return this.retrieveWorlds_();
  }

  /**
   * Gets the worlds from the API.
   * @return {!angular.$q.Promise<!Array<!Object>>}
   * @private
   */
  retrieveWorlds_() {
    const path = constants.GwApiPath.WORLDS + '?' +
        constants.ApiParams.IDS + '=' + constants.ALL;

    return this.http_.get(path).then(
        (response) => this.worlds_ = response.data);
  }
}

angular.module('mainApp.services.worlds', [])
    .service('worldsService', WorldsService);
