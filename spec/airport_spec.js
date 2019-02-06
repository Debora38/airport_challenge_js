describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("should land a plane", function() {
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

  it("should take off a plane", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes()).not.toContain(plane);
  });

});
