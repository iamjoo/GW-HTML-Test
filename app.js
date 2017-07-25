const app = angular.module('mainApp', [
  'ngAnimate',
  'ngMaterial',
  'md.data.table',
  'ui.router',
  'mainApp.components.characterTooltip',
  'mainApp.components.itemTooltip',
  'mainApp.controllers.accountInfo',
  'mainApp.controllers.build',
  'mainApp.controllers.dailyAchievements',
  'mainApp.controllers.index',
  'mainApp.controllers.testTab',
  'mainApp.controllers.worlds',
  'mainApp.formatters.stringToNumber',
  'mainApp.services.accounts',
  'mainApp.services.achievements',
  'mainApp.services.build',
  'mainApp.services.characters',
  'mainApp.services.files',
  'mainApp.services.items',
  'mainApp.services.worlds',
]);

app.config([
  '$locationProvider', '$stateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('build', {
          url: '/build',
          templateUrl: 'build/build.html',
          controller: BuildCtrl,
          controllerAs: 'BuildCtrl',
        })
        .state('worlds', {
          url: '/worlds',
          templateUrl: 'worlds/worlds.html',
          controller: WorldsCtrl,
          controllerAs: 'WorldsCtrl',
        })
        .state('daily-achievements', {
          url: '/dailyachievements',
          templateUrl: 'achievements/daily_achievements.html',
          controller: DailyAchievementsCtrl,
          controllerAs: 'DailyAchievementsCtrl',
        })
        .state('account-info', {
          url: '/accountinfo',
          templateUrl: 'account_info/account_info.html',
          controller: AccountInfoCtrl,
          controllerAs: 'AccountInfoCtrl',
        })
        .state('test-tab', {
          url: '/testtab',
          templateUrl: 'test_tab/test_tab.html',
          controller: TestTabCtrl,
          controllerAs: 'TestTabCtrl',
        });
}]);
