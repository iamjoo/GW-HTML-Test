/**
 * Controller for the test_tab.html page.
 * @final
 */
class TestTabCtrl {
  constructor() {
    this.items = [];

    this.isOpen = true;

    this.init_();
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  init_() {
    for (let i = 0; i < 20; i++) {
      this.items.push('This is a test ' + i);
    }
  }
}

angular.module('mainApp.controllers.testTab', [])
    .controller('testTabCtrl', TestTabCtrl);
