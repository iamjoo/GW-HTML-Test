/**
 * Controller for the index.html page.
 * @final
 */
class IndexCtrl {
  constructor($scope) {
    this.selectedTab = 'build';

    console.log($scope);
  }
}

angular.module('mainApp.controllers.index', [])
    .controller('indexCtrl', IndexCtrl);
