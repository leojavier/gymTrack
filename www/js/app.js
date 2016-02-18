// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.cardio', {
      url: '/cardio-exercise-list',
      views: {
        'tab-chats': {
          templateUrl: 'templates/cardio-exercise-list.html',
          controller: 'cardioExerciseController'
        }
      }
    })
    .state('tab.weightDetail', {
      url: '/weight-exercise-detail/:exerciseId',
      views: {
        'tab-account': {
          templateUrl: 'templates/weight-exercise-detail.html',
          controller: 'weightExerciseDetailController'
        }
      }
    })

  .state('tab.weights', {
    url: '/weight-exercise-list',
    views: {
      'tab-account': {
        templateUrl: 'templates/weight-exercise-list.html',
        controller: 'weightExerciseController'
      }
    }
  })
    .state('tab.add-exercise', {
    url: '/add-exercise',
    views: {
      'tab-add-exercise': {
        templateUrl: 'templates/tab-add-exercise.html',
        controller: 'addExerciseController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
