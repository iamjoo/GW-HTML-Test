/**
 * A tooltip component that shows item details.
 * @final
 */
class ItemTooltipCtrl {
  constructor() {
    /** @type {!Object} */
    this.item;

    /** @type {!Object} */
    this.constants = constants;
  }
}

const itemTooltipComponent = {
  transclude: true,
  bindings: {
    item: '<',
  },
  controller: ItemTooltipCtrl,
  controllerAs: 'ItemTooltipCtrl',
  templateUrl: 'components/item_tooltip/item_tooltip.html',
};

angular.module('mainApp.components.itemTooltip', [])
    .component('itemTooltip', itemTooltipComponent);
