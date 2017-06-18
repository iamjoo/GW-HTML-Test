/**
 * Controller for the account_info.html page.
 * @final
 */
class AccountInfoCtrl {
    /**
   * @param {!mainApp.services.accounts.AccountsService} accountsService
   * @param {!mainApp.services.characters.CharactersService} charactersService
   * @param {!mainApp.services.files.FilesService} filesService
   * @param {!mainApp.services.worlds.WorldsService} worldsService
   */
  constructor(accountsService, charactersService, filesService, worldsService) {
    /** @private {!mainApp.services.accounts.AccountsService} */
    this.accountsService_ = accountsService;

    /** @private {!mainApp.services.characters.CharactersService} */
    this.charactersService_ = charactersService;

    /** @private {!mainApp.services.files.FilesService} */
    this.filesService_ = filesService;

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
