'use strict';

describe('Directive: d3Graph', function () {

  // load the directive's module
  beforeEach(module('comedianCircleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d3-graph></d3-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the d3Graph directive');
  }));
});
