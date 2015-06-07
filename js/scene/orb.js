var Orb = function(name, diameter, tilt){
	Node.call(this);
	this.name     = name;
	this.diameter = scale(diameter);
	this.tilt     = degToRad(tilt);

    this.quader = new Sphere(this.diameter/2.0);
};

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(){
    this.quader.draw();
};