/**
 * A model for storing achievement reward information. This is consumed by the
 * Achievement model.
 * @final
 */
class AchievementReward {
  constructor() {
    /** @type {number} */
    this.coins;

    /** @type {!Object} */
    this.item;

    /** @type {!Object} */
    this.mastery;

    /** @type {string} */
    this.title;
  }
}