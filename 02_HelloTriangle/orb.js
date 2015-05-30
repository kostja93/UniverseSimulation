var Orb = function(name, diameter, tilt){
	Node.call(this);
	this.name     = name;
	this.diameter = diameter;
	this.tilt     = tilt;
}

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(logString){
	logString += this.name+"," + this.diameter+","+ this.tilt;
	return logString;
}