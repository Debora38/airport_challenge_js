describe("Plane", function() {
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("can land at an airport", function() {
    plane.takesOff()
    plane.land()
    expect(plane.status()).toEqual(true)
  });

  it("can take off at an airport", function() {
    plane.takesOff()
    expect(plane.status()).toEqual(false)
  });

});
