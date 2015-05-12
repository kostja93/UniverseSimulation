var Orbit = function(radius, rotation) {
    Node.call(this);
    this.radius = radius;
    this.rotation = rotation;
};

Orbit.prototype = Object.create(Node.prototype);
Orbit.prototype.constructor = Node;

Orbit.prototype.draw = function(logString){
	logString += "translation: "+this.radius+", roation: "+ this.rotation;
	return logString;
}