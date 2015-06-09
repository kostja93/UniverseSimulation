var Orb = function(name, tilt, rotationSpeed){
	Node.call(this);
	this.name     = name;
	this.tilt     = degToRad(tilt);
    this.rotationSpeed = rotationSpeed;

    this.rotateZ(this.tilt);
};

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(){
    this.rotateY(Math.PI/1000.0 * this.rotationSpeed);
};