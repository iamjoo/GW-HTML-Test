const constants = {};

constants.GwApiPath = {
  ACCOUNT: 'https://api.guildwars2.com/v2/account',
  ACHIEVEMENTS: 'https://api.guildwars2.com/v2/achievements',
  BUILD: 'https://api.guildwars2.com/v2/build',
  CHARACTERS: 'https://api.guildwars2.com/v2/characters',
  COIN_EXCHANGE: 'https://api.guildwars2.com/v2/commerce/exchange/coins',
  COLORS: 'https://api.guildwars2.com/v2/colors',
  DAILY_ACHIEVEMENTS: 'https://api.guildwars2.com/v2/achievements/daily',
  FILES: 'https://api.guildwars2.com/v2/files',
  GEM_EXCHANGE: 'https://api.guildwars2.com/v2/commerce/exchange/gems',
  ITEM: 'https://api.guildwars2.com/v2/items/',
  WORLDS: 'https://api.guildwars2.com/v2/worlds',
};

constants.ApiParams = {
  ACCESS_TOKEN: 'access_token',
  IDS: 'ids',
  PAGE: 'page',
};

constants.RewardType = {
  COINS: 'Coins',
  ITEM: 'Item',
  MASTERY: 'Mastery',
  TITLE: 'Title',
};

constants.ProfessionId = {
  ELEMENTALIST: 'icon_elementalist_big',
  ENGINEER: 'icon_engineer_big',
  GUARDIAN: 'icon_guardian_big',
  MESMER: 'icon_mesmer_big',
  NECROMANCER: 'icon_necromancer_big',
  RANGER: 'icon_ranger_big',
  REVENANT: 'icon_revenant_big',
  THIEF: 'icon_thief_big',
  WARRIOR: 'icon_warrior_big',
}

constants.ALL = 'all';

constants.API_KEY =
    '480D37DC-78F2-8445-8399-2B68049DE055A1AD299C-7A6B-424B-BF2D-64E620017850';

angular.module('mainApp.util.constants', [])
    .constant('constants', constants);