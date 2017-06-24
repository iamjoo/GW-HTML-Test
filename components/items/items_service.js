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
   * Gets information for one item from the API.
   * @param {string} itemId
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getItemInformation(itemId) {
    const path = constants.GwApiPath.ITEMS + '/' + itemId;

    return this.http_.get(path)
        .then((response) => response.data);
  }

  /**
   * Gets information for multiple items from the API.
   * @param {!Array<string>} itemIds
   * @return {!angular.$q.Promise<!Array<!Object>>}
   */
  getItemsInformation(itemIds) {
    const path = constants.GwApiPath.ITEMS + '?' + constants.ApiParams.IDS +
        '=' + itemIds.join(',');

    return this.http_.get(path)
        .then((response) => response.data);
  }
}

angular.module('mainApp.services.items', [])
    .service('itemsService', ItemsService);
