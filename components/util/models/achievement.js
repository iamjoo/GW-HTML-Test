/**
 * A model for storing achievement information.
 * @final
 */
class Achievement {
  /**
   * @param {number} id
   * @param {string} type
   * @param {!Object} levelInfo
   * @param {!Object} achievementInfo
   * @param {!AchievementReward} reward
   */
  constructor(id, type, levelInfo, achievementInfo, reward) {
    /**
     * The type of achievement (PvE, PvP, etc.).
     * @type {string}
     */
    this.type = this.formatType_(type);

    /** @type {number} */
    this.id = id;

    /** @type {!Object} */
    this.level = {
      min: levelInfo.min,
      max: levelInfo.max,
    };

    /** @type {!Object} */
    this.achievementInfo = achievementInfo;

    /** @type {!AchievementReward} */
    this.reward = reward;
  }

  /**
   * Formats the type.
   * @param {string} type
   * @return {string}
   * @private
   */
  formatType_(type) {
    let formattedType;

    switch (type) {
      case 'pve':
        formattedType = 'PvE';
        break;
      case 'pvp':
        formattedType = 'PvP';
        break;
      case 'wvw':
        formattedType = 'WvW';
        break;
      case 'fractals':
        formattedType = 'Fractals';
        break;
      default:
        formattedType = type;
        break;
    }

    return formattedType;
  }
}