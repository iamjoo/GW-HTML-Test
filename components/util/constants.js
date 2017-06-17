const constants = {};

constants.GwApiPath = {
  ACHIEVEMENTS: 'https://api.guildwars2.com/v2/achievements',
  BUILD: 'https://api.guildwars2.com/v2/build',
  COIN_EXCHANGE: 'https://api.guildwars2.com/v2/commerce/exchange/coins',
  COLORS: 'https://api.guildwars2.com/v2/colors',
  DAILY_ACHIEVEMENTS: 'https://api.guildwars2.com/v2/achievements/daily',
  GEM_EXCHANGE: 'https://api.guildwars2.com/v2/commerce/exchange/gems',
  ITEM: 'https://api.guildwars2.com/v2/items/',
  WORLDS: 'https://api.guildwars2.com/v2/worlds',
};

constants.ApiParams = {
  IDS: 'ids',
};

constants.RewardType = {
  ITEM: 'Item',
};

constants.ALL = 'all';

angular.module('mainApp.util.constants', [])
    .constant('constants', constants);