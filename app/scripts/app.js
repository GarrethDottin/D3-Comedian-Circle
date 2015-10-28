'use strict';

/**
 * @ngdoc overview
 * @name comedianCircleApp
 * @description
 * # comedianCircleApp
 *
 * Main module of the application.
 */

angular.module('d3', []);
angular.module('comedianCircleApp.directives',  ['d3']);

angular
  .module('comedianCircleApp', [
    'd3',
    'ngAnimate',
    'ui.bootstrap',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'comedianCircleApp.directives', 
    '720kb.tooltips'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

