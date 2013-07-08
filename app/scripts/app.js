'use strict';

angular.module('PrisonAdventureApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/hats', {
        templateUrl: 'views/gameView1.html',
        controller: 'GameViewCtrl1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
