'use strict';

/**
 * @ngdoc directive
 * @name comedianCircleApp.directive:d3Graph
 * @description
 * # d3Graph
 */
angular.module('comedianCircleApp.directives')
.directive('d3Graph', ['d3',  function (d3) {
    return {
      scope: {}, 
      controller: function ($scope) { 

      	$scope.comedians  = { 
  			"Jerry Seinfeld": 32, "Terry Fator": 24, "Russell Peters": 21, "Jeff Dunham" : 19, "Louis CK" : 16, "Kevin Hart" : 14, "Larry Cable Guy" : 13, "George Lopez" : 12, " Daniel Tosh" : 11, "Gabriel Inglesia" : 11, "Ron White" : 10 
  		};
      }, 
      link: function (scope) {
      		var	moneyDataSet = [];
      		var positionalData = [[250,250,"Jerry Seinfeld" ], [100, 400,"Terry Fator" ], [100, 140, "Russell Peters"], [300, 105, "Jeff Dunham"], [380, 220,"Louis CK" ], [140, 250,"Kevin Hart" ], [240, 380,"Larry Cable Guy" ], [340, 420," George Lopez" ], [45, 45,"Daniel Tosh" ], [50, 250, "Gabriel Inglesia"],  [400, 40, "Ron White"]];

			angular.forEach(scope.comedians, function (key,value) {
			   moneyDataSet.push(key);
			});


			scope.render = function () { 
      			var margin = {top: 40, right: 40, bottom: 40, left: 40};
				var yPositionCounter = 0; 
				var xPositionCounter = 0;
				
	      		var attrSVG = d3.select('#comedianGraph')
	      			.style("display", "inline-block")
	      			.attr("width", 500)
	      			.attr("height", 500);

	      		var svg = d3.select('#comedianGraph')
	      			.append('svg')
	      			.classed("scatterplot", true)
		      		.attr("width", 500)
					.attr("height", 500);

				var circles = svg.selectAll("g")
					.data(moneyDataSet)
					.enter()
					.append("g");


				circles
					.append("text")
					.text("finding")
					.attr("cy", function (d) {
						var yPosition = positionalData[yPositionCounter][0];
						yPositionCounter++;
						return yPosition; 
					})
					.attr("cx", function () { 
						var xPosition = positionalData[xPositionCounter][1];
						xPositionCounter++;
						return xPosition;
					})


				var circleAttributes = circles.append("circle")
					.attr("r", function (d) {
						var radius = d * 2;
						return radius;
					})
					.attr("cy", function (d) {
						var yPosition = positionalData[yPositionCounter][0];
						yPositionCounter++;
						return yPosition; 
					})
					.attr("cx", function () { 
						var xPosition = positionalData[xPositionCounter][1];
						xPositionCounter++;
						return xPosition;
					})
					.attr("fill", "grey")
					.text("testing")
	
			}
			scope.render();

      }
    };
}]);
