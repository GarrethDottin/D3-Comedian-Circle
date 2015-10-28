'use strict';

describe('Service: tipsy', function () {

  // load the service's module
  beforeEach(module('comedianCircleApp'));

  // instantiate service
  var tipsy;
  beforeEach(inject(function (_tipsy_) {
    tipsy = _tipsy_;
  }));

  it('should do something', function () {
    expect(!!tipsy).toBe(true);
  });

});
