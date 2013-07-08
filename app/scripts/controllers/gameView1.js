'use strict';

angular.module('PrisonAdventureApp')
  .controller('GameViewCtrl1', function ($scope, $timeout, $http) {
    $http.get('scripts/dialogue/test.json').success(function(data){
      $scope.str = data.text;
      console.log(typeof $scope.str);
      $scope.counter = 0;
      $timeout(function recurse(){
        $scope.counter = $scope.counter + 1;
        $timeout(recurse, 1000);
      },1000);
    });
  });
