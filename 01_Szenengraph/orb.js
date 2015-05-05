var Orb = function(name){
	Node.call(this);
	this.name = name;
}

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(logString){
	logString += this.name+",";
	return logString;
}