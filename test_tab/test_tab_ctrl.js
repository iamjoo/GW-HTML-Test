/**
 * Controller for the test_tab.html page.
 * @final
 */
class TestTabCtrl {
  constructor($scope) {
    this.scope_ = $scope;
    this.items = [];

    this.isOpen = true;

    this.amount = 12000;

    this.init_();
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  onBlur() {
    // this.amount = parseInt(this.amount, 10).toLocaleString();
  }

  onFocus() {
  }

  init_() {
    for (let i = 0; i < 20; i++) {
      this.items.push('This is a test ' + i);
    }
  }
}

angular.module('mainApp.controllers.testTab', [])
    .controller('testTabCtrl', TestTabCtrl);
