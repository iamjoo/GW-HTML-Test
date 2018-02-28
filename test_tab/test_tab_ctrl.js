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

    this.lastRange;

    this.init_();

    $scope.$on(constants.Event.INSERT_EMOJI, this.insertEmoji_.bind(this));
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

  onMessageEntryBlur() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.setStart(selection.focusNode, range.startOffset);
    range.setEnd(selection.focusNode, range.endOffset);

    this.lastRange = range;
  }

  insertEmoji_() {
    // This is a node
    const messageEntry = document.getElementById('gw-message-entry');
    let range;

    if (this.lastRange) {
      range = this.lastRange;
    } else {
      range = new Range();
      range.setStart(messageEntry, 0);
      range.setEnd(messageEntry, 0);
    }

    range.deleteContents();

    // Create a new img element and insert it where the cursor used to be
    const newImg = document.createElement('img');
    newImg.setAttribute('class', 'gw-emoji-icon');
    newImg.setAttribute(
        'src',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/128px-Emoji_u263a.svg.png');
    range.insertNode(newImg);

    const newRange = new Range();
    newRange.setStart(messageEntry, range.startOffset + 1);
    newRange.setEnd(messageEntry, range.startOffset + 1);
    this.lastRange = newRange;
  }

  replaceTextWithEmoji_() {
    // This is a node
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
    console.warn(range);
    range.deleteContents();

    // Create a new img element and insert it where "test" used to be
    const newImg = document.createElement('img');
    newImg.setAttribute('class', 'gw-emoji-icon');
    newImg.setAttribute(
        'src',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/128px-Emoji_u263a.svg.png');
    range.insertNode(newImg);

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
