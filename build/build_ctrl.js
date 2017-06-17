/**
 * Controller for the build.html page.
 * @final
 */
class BuildCtrl {
  /**
   * @param {!mainApp.services.build.BuildService} buildService
   */
  constructor(buildService) {
    /** @private {!mainApp.services.build.BuildService} */
    this.buildService_ = buildService;

    /** @type {number} */
    this.buildNumber;

    this.resetBuildNumber();
  }

  /**
   * Increments the build number by 2.
   */
  incrementBuildNumber() {
    this.buildNumber += 2;
  }

  /**
   * Resets the build number to the actual build number from the API.
   */
  resetBuildNumber() {
    this.buildService_.getBuild().then((response) => {
      this.buildNumber = response;
    });
  }
}

angular.module('mainApp.controllers.build', [])
    .controller('buildCtrl', BuildCtrl);
