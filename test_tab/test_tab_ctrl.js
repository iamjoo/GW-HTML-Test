/**
 * Controller for the test_tab.html page.
 * @final
 */
class TestTabCtrl {
  /**
   * @param {!angular.$scope} $scope
   * @ngInject
   */
  constructor($scope) {
    this.items = [];

    this.isOpen = true;

    this.amount = 12000;

    this.init_();

    $scope.$on(constants.Event.INSERT_EMOJI, this.insertEmoji_);
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

  insertEmoji_() {
    const messageEntry = document.getElementById('gw-message-entry');

    // Move focus back to the message entry box
    messageEntry.focus();

    // Find "test"
    const index = messageEntry.textContent.indexOf('test');
    if (index < 0) {
      return;
    }

    // Select the range that surrounds "test" and delete its contents
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.setStart(selection.focusNode, index);
    range.setEnd(selection.focusNode, index + 4);
    range.deleteContents();

    // Create a new span and insert it where "test" used to be
    const newSpan = document.createElement('span');
    newSpan.textContent = 'new span';
    range.insertNode(newSpan);

    // Move caret to end of inserted span
    selection.collapseToEnd();
  }

  init_() {
    for (let i = 0; i < 20; i++) {
      this.items.push('This is a test ' + i);
    }
  }
}

angular.module('mainApp.controllers.testTab', [])
    .controller('testTabCtrl', TestTabCtrl);
