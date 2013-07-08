'use strict';

angular.module('PrisonAdventureApp')
  .controller('GameViewCtrl1', function ($scope, $timeout, $http) {
    $http.get('scripts/dialogue/test.json').success(function(data){

      var str = data.text;
      $scope.displayString = '';
      console.log(typeof str);
      $scope.counter = 0;
      $timeout(function recurse(){
        if ($scope.counter < str.length){
          $scope.counter = $scope.counter + 1;
          $scope.displayString = str.substr(0,$scope.counter);
          $timeout(recurse, 50);
        }
      },50);

    });
  });
