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
  ITEMS: 'https://api.guildwars2.com/v2/items',
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
};

constants.EquipmentSlot = {
  HELM_AQUATIC: 'HelmAquatic',
  BACKPACK: 'Backpack',
  COAT: 'Coat',
  BOOTS: 'Boots',
  GLOVES: 'Gloves',
  HELM: 'Helm',
  LEGGINGS: 'Leggings',
  SHOULDERS: 'Shoulders',
  ACCESSORY_1: 'Accessory1',
  ACCESSORY_2: 'Accessory2',
  RING_1: 'Ring1',
  RING_2: 'Ring2',
  AMULET: 'Amulet',
  WEAPON_AQUATIC_A: 'WeaponAquaticA',
  WEAPON_AQUATIC_B: 'WeaponAquaticB',
  WEAPON_A_1: 'WeaponA1',
  WEAPON_A_2: 'WeaponA2',
  WEAPON_B_1: 'WeaponB1',
  WEAPON_B_2: 'WeaponB2',
  SICKLE: 'Sickle',
  AXE: 'Axe',
  PICK: 'Pick',
};

constants.ALL = 'all';

constants.API_KEY =
    '480D37DC-78F2-8445-8399-2B68049DE055A1AD299C-7A6B-424B-BF2D-64E620017850';

angular.module('mainApp.util.constants', [])
    .constant('constants', constants);