var Orb = function(name, diameter, tilt, rotationSpeed){
	Node.call(this);
	this.name     = name;
	this.diameter = scale(diameter);
	this.tilt     = degToRad(tilt);
    this.rotationSpeed = rotationSpeed;

    this.rotateZ(this.tilt);
    this.sphere = new Sphere(this.diameter / 2.0);
};

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(){
    this.rotateY(Math.PI/1000.0 * this.rotationSpeed);
    this.sphere.draw();
};