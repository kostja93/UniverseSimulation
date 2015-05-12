var Transform = function(radius, rotation) {
    Node.call(this);
    this.radius = radius;
    this.rotation = rotation;
};

Transform.prototype = Object.create(Node.prototype);
Transform.prototype.constructor = Node;

Transform.prototype.draw = function(logString){
	logString += this.radius+", "+ this.rotation;
	return logString;
}