/**
 * A model for a character.
 * @final
 */
class Character {
  /**
   * @param {!Object} character
   */
  constructor(character) {
    /** @type {!Object} */
    this.info = character;

    /** @type {string} */
    this.playTime = Util.formatAge(character.age);

    /** @type {string} */
    this.createDate = Util.formatDate(character.created);

    /** @type {string} */
    this.professionIconUrl;

    /** @type {!Equipment} */
    this.equipment;

    /** @type {!Array<!Object>} */
    this.inventory;
  }
}