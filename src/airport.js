function Airport() {
  this._planes = [];
};

Airport.prototype.planes = function() {
  return this._planes;
}

Airport.prototype.land = function(plane) {
  plane.land()
  this._planes.push(plane)
};

Airport.prototype.takeOff = function(plane) {
  plane.takesOff()
  this._planes.splice( this._planes.indexOf(plane), 1 );
};
