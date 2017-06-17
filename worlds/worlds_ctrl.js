/**
 * Controller for the worlds.html page.
 * @final
 */
class WorldsCtrl {
  /**
   * @param {!mainApp.services.worlds.WorldsService} worldsService
   */
  constructor(worldsService) {
    /** @private {!mainApp.services.worlds.WorldsService} */
    this.worldsService_ = worldsService;

    /** @type {!Array<!Object>} */
    this.worlds;

    this.getWorlds();
  }

  getWorlds() {
    this.worldsService_.getWorlds().then((response) => {
      this.worlds = response;
    });
  }
}

angular.module('mainApp.controllers.worlds', [])
    .controller('worldsCtrl', WorldsCtrl);
