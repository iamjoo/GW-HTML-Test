/**
 * A service that retrieves character information from the API.
 * @final
 */
class CharactersService {
  /**
   * @param {!angular.$http} $http
   */
  constructor($http) {
    /** @private {!angular.$http} */
    this.http_ = $http;
  }

  /**
   * Gets all characters from the API.
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getCharacters() {
    const path = constants.GwApiPath.CHARACTERS + '?' +
        constants.ApiParams.PAGE + '=0' + '&' +
        constants.ApiParams.ACCESS_TOKEN + '=' + constants.API_KEY;

    return this.http_.get(path).then((response) => response.data);
  }
}

angular.module('mainApp.services.characters', [])
    .service('charactersService', CharactersService);
