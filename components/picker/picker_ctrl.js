const EMOJIS_PER_ROW = 6;

/**
 * A picker component.
 * @final
 */
class PickerCtrl {
  /**
   * @param {!angular.$scope} $scope
   * @param {!EmojiService} emojiService
   * @ngInject
   */
  constructor($scope, emojiService) {
    /** @const @private {!angular.$scope} */
    this.scope_ = $scope;

    /** @const @private {!EmojiService} */
    this.emojiService_ = emojiService;

    /**
     * The selected category tab.
     * @type {string}
     */
    this.currentTab;

    /**
     * The category header to display at the top of the picker. This is taken
     * headers_.
     * @type {string}
     */
    this.header;

    /**
     * The headers to display at the top of the picker.
     * @private {!Array<headers>}
     */
    this.headers_ = ['Faces', 'Animals', 'Vehicles'];

    /**
     * The giant list of emojis, including header breaks.
     * @type {!Array<string>}
     */
    this.allEmojis = [];

    /**
     * The index of the top-most element that the user can see in allEmojis.
     * Used for the virtual repeat.
     * @type {number}
     */
    this.topIndex = 0;

    /**
     * The emoji categories. These are derived from the keys of the emoji map.
     * @private {!Array<string>}
     */
    this.categories_ = Array.from(emojiService.getEmojiMap().keys());

    /**
     * A mapping of each category to its index in allEmojis.
     * @private {!Map<string, number>}
     */
    this.categoryIndexToCategoryMapping_ = new Map();

    /**
     * A mapping of each category's index in allEmojis to the category.
     * @private {!Map<number, string
     */
    this.categoryToCategoryIndexMapping_ = new Map();

    // Watches the topIndex for any changes due to the user scrolling.
    $scope.$watch(() => this.topIndex, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.updateHeaderAndTab_();
      }
    });
  }

  /**
   * Built-in AngularJS method that fires when the component is initialized.
   */
  $onInit() {
    this.categories_.forEach((category, categoryIndex) => {
      // Insert the header and its index in allEmojis into the map
      this.categoryIndexToCategoryMapping_.set(this.allEmojis.length, category);
      this.categoryToCategoryIndexMapping_.set(category, this.allEmojis.length);

      // Insert the header into allEmojis
      this.allEmojis.push(this.headers_[categoryIndex]);

      // Insert emojis into allEmojis
      this.emojiService_.getEmojiMap().get(category).forEach(
          (emoji, emojiIndex) => {
            if (emojiIndex % EMOJIS_PER_ROW === 0) {
              this.allEmojis.push('');
            }

            const lastIndex = this.allEmojis.length - 1;
            this.allEmojis[lastIndex] += emoji;
          });
    });

    this.currentTab = this.categories_[0];
    this.updateHeaderAndTab_();
  }

  /**
   * Change tab.
   * @param {string} tabName
   */
  changeTab(tabName) {
    this.topIndex = this.categoryToCategoryIndexMapping_.get(tabName);
  }

  /**
   * Insert an emoji.
   */
  insertEmoji() {
    this.scope_.$emit(constants.Event.INSERT_EMOJI, 'text');
  }

  /**
   * Updates header and selected tab.
   * @private
   */
  updateHeaderAndTab_() {
    const newHeader = this.categoryIndexToCategoryMapping_.get(this.topIndex);
    let newIndex;

    if (newHeader) {
      // The user scrolled to a header so update the displayed header to reflect
      // it.
      newIndex = this.categories_.indexOf(newHeader);
    } else {
      // The user scrolled somewhere between headers so find the category
      // corresponding to the topIndex.
      let indexInAllEmojis = 0;

      for (let category of this.categories_) {
        const categoryIndex =
            this.categoryToCategoryIndexMapping_.get(category);

        if (categoryIndex < this.topIndex) {
          indexInAllEmojis = categoryIndex;
        } else {
          break;
        }
      }

      newIndex =
          this.categories_.indexOf(
              this.categoryIndexToCategoryMapping_.get(indexInAllEmojis));
    }

    this.header = this.headers_[newIndex];
    this.currentTab = this.categories_[newIndex];
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
