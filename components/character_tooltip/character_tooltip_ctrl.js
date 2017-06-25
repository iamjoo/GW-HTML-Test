/**
 * A tooltip component that shows character details.
 * @final
 */
class CharacterTooltipCtrl {
  constructor() {
    /** @type {?Character} */
    this.character;

    /** @type {!Object} */
    this.constants = constants;
  }
}

const characterTooltipComponent = {
  transclude: true,
  bindings: {
    character: '<',
  },
  controller: CharacterTooltipCtrl,
  controllerAs: 'CharacterTooltipCtrl',
  templateUrl: 'components/character_tooltip/character_tooltip.html',
};

angular.module('mainApp.components.characterTooltip', [])
    .component('characterTooltip', characterTooltipComponent);
