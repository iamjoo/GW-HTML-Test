/**
 * A picker component.
 * @final
 */
class PickerCtrl {
  /**
   * @param {!EmojiService} emojiService
   */
  constructor(emojiService) {
    /** @const @private {!EmojiService} */
    this.emojiService_ = emojiService;

    /** @type {string} */
    this.currentTab;

    /** @type {!Array<string>} */
    this.allEmojis = [];

    /** @type {!Array<string>} */
    this.categories = ['faces', 'vehicles', 'animals'];

    this.topIndex;
  }

  /**
   * Built-in AngularJS method that fires when the component is initialized.
   */
  $onInit() {
    this.currentTab = 'faces';
    // const mainDiv = document.getElementById('emoji-content');

    this.emojiService_.getEmoji().forEach((emoji, index) => {
      // DOM manipulation
      // if (index % 3 === 0) {
      //   const newElement = document.createElement("div");
      //   newElement.setAttribute('id', this.categories[index / 3]);
      //   mainDiv.appendChild(newElement);
      // }
      // mainDiv.lastElementChild.append(emoji);

      // this.allEmojis population
      if (index % 3 === 0) {
        this.allEmojis.push('');
      }

      const lastIndex = this.allEmojis.length - 1;
      this.allEmojis[lastIndex] += emoji;
    });
  }

  /**
   * Change tab.
   * @param {string} tabName
   */
  changeTab(tabName) {
    const index = this.categories.indexOf(tabName);
    this.topIndex = index * 6;
  }
}

const pickerComponent = {
  transclude: true,
  controller: PickerCtrl,
  controllerAs: 'PickerCtrl',
  templateUrl: 'components/picker/picker.html',
};

angular.module('mainApp.components.picker', [])
    .component('picker', pickerComponent);
