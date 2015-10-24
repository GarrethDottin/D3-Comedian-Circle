'use strict';

describe('Service: d3library', function () {

  // load the service's module
  beforeEach(module('comedianCircleApp'));

  // instantiate service
  var d3library;
  beforeEach(inject(function (_d3library_) {
    d3library = _d3library_;
  }));

  it('should do something', function () {
    expect(!!d3library).toBe(true);
  });

});
