// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('azyrComp', ['ionic', 'azyrComp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'mainView': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'mainView': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.armybuilder', {
      url: '/army-builder',
      views: {
        'mainView': {
          templateUrl: 'templates/army-builder.html',
          controller: 'ArmyCtrl'
        }
      }
    })

    .state('app.armybuilder.army', {
      url: '/army',
      views: {
        'armyTabContent': {
          templateUrl: 'templates/army.html',
          controller: 'ArmyCtrl'
        }
      }
    })

  .state('app.armybuilder.army.detail', {
    url: '/warscroll/:warscrollId',
    views: {
      'armyTabContent': {
        templateUrl: 'templates/detail.html',
        controller: 'WarscrollCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/army-builder');
});
