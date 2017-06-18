/**
 * A service that retrieves account information from the API.
 * @final
 */
class AccountsService {
  /**
   * @param {!angular.$http} $http
   */
  constructor($http) {
    /** @private {!angular.$http} */
    this.http_ = $http;
  }

  /**
   * Gets account info from the API.
   * @return {!angular.$q.Promise<!Object>}
   */
  getAccount() {
    const path = constants.GwApiPath.ACCOUNT + '?' +
        constants.ApiParams.ACCESS_TOKEN + '=' + constants.API_KEY;

    return this.http_.get(path).then((response) => response.data);
  }
}

angular.module('mainApp.services.accounts', [])
    .service('accountsService', AccountsService);
