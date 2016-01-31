angular.module('starter.controllers', [])
.directive('armySection', function() {
  return {
    templateUrl: 'templates/army-section.html',
    restrict: 'E',
    link: function(scope, element) {
      //Nothing
    }
  };
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ArmyCtrl', function($scope) {
  $scope.unitTypes = ['Hero', 'War Machine', 'Unit'];
  $scope.restrictions = {
    'Hero': {count: 5, type: 'pts'},
    'War Machine': {count: 2, type: 'units'},
    'Unit': {count: 10, type: 'units'},
    'Total': {count: 20, type: 'points'}
  };
  $scope.army = [
    { title: 'Alarielle', id: 1, models: 1, points: 5, type: 'Hero' },
    { title: 'Swordmasters', id: 2, models: 5, points: 3, type: 'Unit' },
    { title: 'Bolt Thrower', id: 3, models: 1, crew: 2, points: 2, type: 'War Machine' },
    { title: 'Mage', id: 4, models: 1, points: 1, type: 'Hero' },
    { title: 'Elyrian Reavers', id: 5, models: 5, points: 6, modelsForPoints: 5, modelsPerPoint: 1, type: 'Unit' },
    { title: 'White Lion Charriot', id: 6, models: 1, points: 4, type: 'Unit' },
  ];
  $scope.getTotal = function(type)
  {
    var total = 0;
    var restriction = $scope.restrictions[type];
    for(var p in $scope.army) {
      if ($scope.army[p].type == type || type == 'Total') {
        if (restriction.type == "units") {
          //unit count
          total += 1;
        } else {
          //points count
          total += $scope.army[p].points;
        }
      }
    }
    return total;
  };

  $scope.getLimit = function(unitType) {
    return $scope.restrictions[unitType].count;
  };
  $scope.isUnitTypeIsValid = function(unitType) {
    return $scope.getLimit(unitType) >= $scope.getTotal(unitType);
  };

  $scope.remove = function(unit)
  {
    var index = $scope.army.indexOf(unit);
    if (index > -1) {
        $scope.army.splice(index, 1);
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
