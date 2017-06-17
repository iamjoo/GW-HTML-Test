const constants = {};

constants.GwApiPath = {
  BUILD: 'https://api.guildwars2.com/v2/build',
  COIN_EXCHANGE: 'https://api.guildwars2.com/v2/commerce/exchange/coins',
  COLORS: 'https://api.guildwars2.com/v2/colors',
  GEM_EXCHANGE: 'https://api.guildwars2.com/v2/commerce/exchange/gems',
  WORLDS: 'https://api.guildwars2.com/v2/worlds',
};

constants.ApiParams = {
  WORLD_IDS: 'ids',
};

constants.ALL = 'all';

angular.module('mainApp.util.constants', [])
    .constant('constants', constants);