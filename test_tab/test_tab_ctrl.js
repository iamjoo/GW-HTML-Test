/**
 * Controller for the test_tab.html page.
 * @final
 */
class TestTabCtrl {
  /**
   * @param {!angular.$scope} $scope
   * @param {!angular.$window} $window
   * @param {!angular.$document} $document
   * @ngInject
   */
  constructor($scope, $window,  $document) {
    this.window_ = $window;

    this.document_ = $document[0];

    this.items = [];

    this.isOpen = true;

    this.amount = 12000;

    this.lastRange_;

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

  onMessageEntryDivBlur() {
    const selection = this.window_.getSelection();
    const range = selection.getRangeAt(0).cloneRange();
    range.setStart(selection.focusNode, range.startOffset);
    range.setEnd(selection.focusNode, range.endOffset);

    this.lastRange_ = range;
    console.log('last range on blur: ' + this.lastRange_.toString());
  }

  onMessageEntryInputBlur() {
    // see HTMLTextAreaElement
    console.log(this.document_.getElementById('gw-message-entry-input').selectionStart);
    console.log(this.document_.getElementById('gw-message-entry-input').selectionEnd);
  }

  /**
   * Inserts emoji.
   * @param {!Event} event The event that was fired
   * @param {string} arg The arg that was passed
   * @private
   */
  insertEmoji_(event, arg) {
    console.log('last range on insert: ' + this.lastRange_.toString());
    // This is a node
    const messageEntry = this.document_.getElementById('gw-message-entry');
    let range;

    if (this.lastRange_) {
      range = this.lastRange_;
    } else {
      range = new Range();
      range.setStart(messageEntry, 0);
      range.setEnd(messageEntry, 0);
    }

    range.deleteContents();

    // Create a new img element and insert it where the cursor used to be
    const newImg = this.document_.createElement('img');
    newImg.setAttribute('class', 'gw-emoji-icon');
    newImg.setAttribute(
        'src',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/128px-Emoji_u263a.svg.png');
    range.insertNode(newImg);

    const newRange = new Range();
    newRange.setStart(messageEntry, range.endOffset + 1);
    newRange.setEnd(messageEntry, range.endOffset + 1);
    this.lastRange_ = newRange;
  }

  replaceTextWithEmoji_() {
    // This is a node
    const messageEntry = this.document_.getElementById('gw-message-entry');

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
    const newImg = this.document_.createElement('img');
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
