'use strict';

/**
 * @ngdoc directive
 * @name comedianCircleApp.directive:d3Graph
 * @description
 * # d3Graph
 */
angular.module('comedianCircleApp.directives')
.directive('d3Graph', ['d3', '$compile',  function (d3) {
    return {
      scope: {}, 
      controller: function ($scope) { 

      	$scope.comedians  = { 
  			"Jerry Seinfeld": 32, "Terry Fator": 24, "Russell Peters": 21, "Jeff Dunham" : 19, "Louis CK" : 16, "Kevin Hart" : 14, "Larry Cable Guy" : 13, "George Lopez" : 12, " Daniel Tosh" : 11, "Gabriel Inglesia" : 11, "Ron White" : 10 
  		};
      }, 
      link: function (scope) {
      		var	moneyDataSet = [];
      		var positionalData = [[250,250,"Seinfeld", 32, 237.5, '#649ACE', "white" ], [100, 400,"Fator", 24, 390, "#9B1F45", "white" ], [100, 140, "Peters", 21, 125, '#3B5CC2', "white"], [300, 105, "Dunham", 19, 90, "#E8C1D6", "white" ], [380, 220,"CK", 16, 212, "#224350", "white" ], [140, 250,"Hart", 14, 240, "#76107f" , "white"], [240, 380,"Cable Guy", 13, 359 , "#D7E9E7" , "white"], [340, 420,"Lopez", 12 , 407, "#66AADD", "white"], [45, 45,"Tosh", 11, 32, "#D46A51", "white" ], [50, 250, "Inglesia", 11, 235, "#889999", "white"],  [400, 40, "White", 10, 28, "#2F752F" , "white"]];

			scope.render = function () { 
      			var margin = {top: 40, right: 40, bottom: 40, left: 40};
				var yPositionCounter = 0; 
				var xPositionCounter = 0;
				var yPositionCounter2 = 0; 
				var xPositionCounter2 = 0;

	      		var attrSVG = d3.select('#comedianGraph')
	      			.style("display", "inline-block")
	      			.attr("width", 500)
	      			.attr("height", 500);

	      		var svg = d3.select('#comedianGraph')
	      			.append('svg')
	      			.classed("scatterplot", true)
		      		.attr("width", 500)
					.attr("height", 450)
					.style("border", "solid 1px grey")


				var circles = svg.selectAll("g")
					.data(positionalData)
					.enter()
					.append("g")
				var circleAttributes = circles.append("circle")
					.attr("r", function (d) {
						var radius = d[3] * 2;
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
					.attr("fill", function colorSetter (d) { 
						return d[5];
					})

				circles
					.append("text")
					.attr("tooltip-append-to-body", true)
                 	.attr("tooltip", function(d){
                    	return 'test';
                 	})
					.attr("font-size", "10")
					.attr("fill", function(d) { 
						return d[6];
					})
					.text(function(d) { 
						return d[2];

					})
					.attr("dy", function (d) {
						return d[0]; 
					})
					.attr("dx", function (d) { 
						
						return d[4];
					})
	
			}
			scope.render();

      }
    };
}]);
