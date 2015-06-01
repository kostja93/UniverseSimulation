var Orb = function(name, diameter, tilt){
	Node.call(this);
	this.name     = name;
	this.diameter = diameter / 1392000;
	this.tilt     = tilt;


    console.log(this.diameter);
    this.quader = new Quader(this.diameter, this.diameter, this.diameter);
};

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(){
    this.quader.draw();
};