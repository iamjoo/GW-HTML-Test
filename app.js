const app = angular.module('mainApp', [
  'ngMaterial',
  'md.data.table',
  'ui.router',
  'mainApp.controllers.build',
  'mainApp.controllers.index',
  'mainApp.controllers.worlds',
  'mainApp.services.build',
  'mainApp.services.worlds',
]);

app.config([
  '$locationProvider', '$stateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');

    $stateProvider
        .state('home', {
          url: '',
          controller: IndexCtrl,
          controllerAs: 'IndexCtrl',
        })
        .state('home.build', {
          url: '/build',
          templateUrl: 'build/build.html',
          controller: BuildCtrl,
          controllerAs: 'BuildCtrl',
        })
        .state('home.worlds', {
          url: '/worlds',
          templateUrl: 'worlds/worlds.html',
          controller: WorldsCtrl,
          controllerAs: 'WorldsCtrl',
        });
}]);
