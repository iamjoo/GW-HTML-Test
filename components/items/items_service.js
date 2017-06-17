/**
 * A service that retrieves item information from the API.
 * @final
 */
class ItemsService {
  /**
   * @param {!angular.$http} $http
   */
  constructor($http) {
    /** @private {!angular.$http} */
    this.http_ = $http;
  }

  /**
   * Gets item information from the API.
   * @param {string} itemId
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getItemInformation(itemId) {
    const path = constants.GwApiPath.ITEM + itemId;

    return this.http_.get(path)
        .then((response) => response.data);
  }
}

angular.module('mainApp.services.items', [])
    .service('itemsService', ItemsService);
