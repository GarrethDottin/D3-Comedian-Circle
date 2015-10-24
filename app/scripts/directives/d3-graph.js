'use strict';

/**
 * @ngdoc directive
 * @name comedianCircleApp.directive:d3Graph
 * @description
 * # d3Graph
 */
angular.module('myApp.directives')
.directive('d3Graph', ['d3',  function (d3) {
    return {
      scope: {}, 
      controller: function ($scope) { 
      	$scope.comedians  = { 
  			"Jerry Seinfeld": 32, "Terry Fator": 24, "Russell Peters": 21, "Jeff Dunham" : 19, "Louis CK" : 16, "Kevin Hart" : 14, "Larry Cable Guy" : 13, "George Lopez" : 12, " Daniel Tosh" : 11, "Gabriel Inglesia" : 11, "Ron White" : 10 
  		};
      }, 
      link: function (scope) {
      	console.log(d3)
      	console.log('working')
      }
    };
}]);
