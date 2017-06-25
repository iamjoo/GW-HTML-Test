/**
 * Controller for the account_info.html page.
 * @final
 */
class AccountInfoCtrl {
  /**
   * @param {!angular.$document} $document
   * @param {!mainApp.services.accounts.AccountsService} accountsService
   * @param {!mainApp.services.characters.CharactersService} charactersService
   * @param {!mainApp.services.files.FilesService} filesService
   * @param {!mainApp.services.items.ItemsService} itemsService
   * @param {!mainApp.services.worlds.WorldsService} worldsService
   */
  constructor(
      $document, accountsService, charactersService, filesService, itemsService,
      worldsService) {
    /** @private {!angular.$document} */
    this.document_ = $document;

    /** @private {!mainApp.services.accounts.AccountsService} */
    this.accountsService_ = accountsService;

    /** @private {!mainApp.services.characters.CharactersService} */
    this.charactersService_ = charactersService;

    /** @private {!mainApp.services.files.FilesService} */
    this.filesService_ = filesService;

    /** @private {!mainApp.services.items.ItemsService} */
    this.itemsService_ = itemsService;

    /** @private {!mainApp.services.worlds.WorldsService} */
    this.worldsService_ = worldsService;

    /** @type {!Account} */
    this.account;

    /** @type {!Array<!Character>} */
    this.characters;

    this.getAccount_();
    this.getCharacters_();
  }

  /**
   * Shows the character tooltip.
   * @param {!angular.$event} event
   * @param {!Character} character
   */
  showCharacterTooltip(event, character) {
    const tooltip = this.document_.find('character-tooltip')[0];
    tooltip.style.position = 'absolute';
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY + 'px';
    angular.element(tooltip).controller('characterTooltip').character =
        character;
  }

  /**
   * Hides the character tooltip.
   */
  hideCharacterTooltip() {
    const tooltip = this.document_.find('character-tooltip');
    angular.element(tooltip[0]).controller('characterTooltip').character = null;
  }

  /**
   * Shows the item tooltip.
   * @param {!angular.$event} event
   * @param {!Object} item
   */
  showItemTooltip(event, item) {
    const x = event.view.outerWidth - event.pageX > 200 ? event.pageX + 10 :
        event.pageX - 200;

    const tooltip = this.document_.find('item-tooltip')[0];
    tooltip.style.position = 'absolute';
    tooltip.style.left = x + 'px';
    tooltip.style.top = event.pageY + 'px';
    angular.element(tooltip).controller('itemTooltip').item = item;
  }

  /**
   * Hides the item tooltip.
   */
  hideItemTooltip() {
    const tooltip = this.document_.find('item-tooltip');
    angular.element(tooltip[0]).controller('itemTooltip').item = null;
  }

  /**
   * Gets account information.
   * @private
   */
  getAccount_() {
    this.accountsService_.getAccount().then((account) => {
      this.worldsService_.getWorld(account.world).then((world) => {
        this.account = new Account(account, world);
      });
    });
  }

  /**
   * Gets characters.
   * @private
   */
  getCharacters_() {
    this.charactersService_.getCharacters().then((characters) => {
      this.characters = characters.map((character) => new Character(character));
      this.getProfessionIcons_();
      this.getEquipment_();
    });
  }

  /**
   * Gets equipment.
   * @private
   */
  getEquipment_() {
    this.characters.forEach((character) => {
      const equipmentIds = character.info.equipment.map(
          (item) => {
            return item.id;
          });

      this.itemsService_.getItemsInformation(equipmentIds).then((resp) => {
        character.equipment = new Equipment(character.info.equipment, resp);
      });
    });
  }

  /**
   * Gets profession icon URLs.
   * @private
   */
  getProfessionIcons_() {
    this.characters.forEach((character) => {
      const professionId =
          constants.ProfessionId[character.info.profession.toUpperCase()];

      this.filesService_.getFileUrl(professionId).then((url) => {
        character.professionIconUrl = url;
      });
    });
  }
}

angular.module('mainApp.controllers.accountInfo', [])
    .controller('accountInfoCtrl', AccountInfoCtrl);
