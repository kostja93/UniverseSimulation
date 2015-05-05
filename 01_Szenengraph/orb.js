var Orb = function(name, radius, diameter, rotation, tilt){
	Node.call(this);
	this.name     = name;
	this.radius   = radius;
	this.diameter = diameter;
	this.rotation = rotation;
	this.tilt     = tilt;
}

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(logString){
	logString += this.name+"," + this.radius+"," + this.diameter+"," + this.rotation+"," + this.tilt;
	return logString;
}