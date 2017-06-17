(function() {
  var app = angular.module('mainApp', []);

  app.controller('MainController', ['$http', function($http) {
    var gw2 = this;
    gw2.goldToGems = "";
    gw2.goldToGems_Gold = 0;
    gw2.goldToGems_Silver = 0;
    gw2.gemsToGold = "";
    gw2.gemsToGold_Gold = 0;
    gw2.gemsToGold_Silver = 0;

    // gets the gold to gems exchange rate from the API
    $http.get('https://api.guildwars2.com/v2/commerce/exchange/coins?quantity=1000000').success(function(apiData) {
      gw2.goldToGems = apiData;
      gw2.goldToGems_Gold = Math.floor(gw2.goldToGems.coins_per_gem / 100);
      gw2.goldToGems_Silver = Math.round(gw2.goldToGems.coins_per_gem % 100);
    });

    // gets the gems to gold exchange rate from the API
    $http.get('https://api.guildwars2.com/v2/commerce/exchange/gems?quantity=100').success(function(apiData) {
      gw2.gemsToGold = apiData;
      gw2.gemsToGold_Gold = Math.floor(gw2.gemsToGold.quantity / 10000);
      gw2.gemsToGold_Silver = Math.round((gw2.gemsToGold.quantity % 10000) / 100);
    });
  }]);
})();