angular.module('azyrComp.controllers', [])
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

})

.controller('ArmyCtrl', function($scope) {
  $scope.unitTypes = ['Hero', 'War Machine', 'Unit'];

  $scope.armyTypes = {
    "Patrol": {
      "points": 20,
      "restrictions": {
        'Hero': {count: 5, type: 'pts'},
        'War Machine': {count: 2, type: 'units'},
        'Unit': {count: 10, type: 'units'},
        'Total': {count: 20, type: 'points'}
      }
    }
  };

  $scope.army = {
    name: "Untitled Army",
    type: "Patrol",
    units: [
      { title: 'Alarielle', id: 1, models: 1, points: 5, type: 'Hero' },
      { title: 'Swordmasters', id: 2, models: 5, points: 3, type: 'Unit' },
      { title: 'Bolt Thrower', id: 3, models: 1, crew: 2, points: 2, type: 'War Machine' },
      { title: 'Mage', id: 4, models: 1, points: 1, type: 'Hero' },
      { title: 'Elyrian Reavers', id: 5, models: 5, points: 6, modelsForPoints: 5, modelsPerPoint: 1, type: 'Unit' },
      { title: 'White Lion Charriot', id: 6, models: 1, points: 4, type: 'Unit' },
    ]
  };

  $scope.getTotal = function(unitType)
  {
    var total = 0;
    var restriction = $scope.armyTypes[$scope.army.type].restrictions[unitType];
    for(var p in $scope.army.units) {
      if ($scope.army.units[p].type == unitType || unitType == 'Total') {
        if (restriction.type == "units") {
          //unit count
          total += 1;
        } else {
          //points count
          total += $scope.army.units[p].points;
        }
      }
    }
    return total;
  };

  $scope.getLimit = function(unitType) {
    return  $scope.armyTypes[$scope.army.type].restrictions[unitType].count;
  };
  $scope.isUnitTypeIsValid = function(unitType) {
    return $scope.getLimit(unitType) >= $scope.getTotal(unitType);
  };

  $scope.remove = function(unit)
  {
    var index = $scope.army.units.indexOf(unit);
    if (index > -1) {
        $scope.army.units.splice(index, 1);
    }
  }
})

.controller('WarscrollCtrl', function($scope) {
});
