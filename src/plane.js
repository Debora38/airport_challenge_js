function Plane() {
  this._landed = true;
};

Plane.prototype.status = function() {
  return this._landed;
};

Plane.prototype.land = function() {
  this._landed = true;
};

Plane.prototype.takesOff = function() {
  this._landed = false;
};
