(function() {
	var app = angular.module('mainApp', []);

	app.controller('MainController', ['$http', function($http) {
		var gw2 = this;
		gw2.build = "";
		gw2.build2 = 2;
		gw2.worlds = "";
		gw2.colors = "";
		gw2.goldToGems = "";
		gw2.goldToGems_Gold = 0;
		gw2.goldToGems_Silver = 0;
		gw2.gemsToGold = "";
		gw2.gemsToGold_Gold = 0;
		gw2.gemsToGold_Silver = 0;
		
		
		// gets the build from the API
		
		$http.get('https://api.guildwars2.com/v2/build').success(function(apiData) {
			gw2.build = apiData;
		});
		
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
		
		this.incrementBy = function(num) {
			gw2.build2 += num;
			return null;
		};
		
		// function to get the build from the API
		
		this.getBuild = function(item) {
			try {
				$http.get('https://api.guildwars2.com/v2/' + item).success(function(apiData) {
					gw2.build2 = apiData.id;
				});
			} catch(e) {
				//
			}
			return null;
		};
		
		// function to get all worlds from the API
		
		this.getWorlds = function() {
			try {
				$http.get('https://api.guildwars2.com/v2/worlds?ids=all').success(function(apiData) {
					gw2.worlds = apiData;
				});
			} catch(e) {
				//
			}
			return null;
		};
		
		// function to get all colors from the API
		
		this.getColors = function() {
			try {
				$http.get('https://api.guildwars2.com/v2/colors?ids=all').success(function(apiData) {
					gw2.colors = apiData;
				});
			} catch(e) {
				//
			}
			return null;
		};
		
		// function to get items from the API
		
		this.getItems = function() {
			try {
				$http.get('https://api.guildwars2.com/v2/items?ids=1,2,6,11,665,928445,12452').success(function(apiData) {
					gw2.items = apiData;
				});
			} catch(e) {
				//
			}
			return null;
		};
	}]);
})();