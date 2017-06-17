const app = angular.module('mainApp', [
  'ngMaterial',
  'md.data.table',
  'ui.router',
  'mainApp.controllers.achievements',
  'mainApp.controllers.build',
  'mainApp.controllers.index',
  'mainApp.controllers.worlds',
  'mainApp.services.achievements',
  'mainApp.services.build',
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
        .state('achievements', {
          url: '/achievements',
          templateUrl: 'achievements/achievements.html',
          controller: AchievementsCtrl,
          controllerAs: 'AchievementsCtrl',
        });
}]);
