/**
 * A model for storing account information.
 * @final
 */
class Account {
  /**
   * @param {!Object} accountInfo
   * @param {!Object} world
   */
  constructor(accountInfo, world) {
    /** @type {!Object} */
    this.info = accountInfo;

    /** @type {!Object} */
    this.world = world;

    /** @type {string} */
    this.playTime = Util.formatAge(accountInfo.age);

    /** @type {string} */
    this.createDate = Util.formatDate(accountInfo.created);
  }
}