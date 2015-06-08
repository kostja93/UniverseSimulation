var Orbit = function(radius, rotation) {
    Node.call(this);
    this.radius = radius / 100;
    this.rotation = degToRad(rotation);


    this.rotateZ(this.rotation);
    this.move([this.radius, 0, 0]);
};

Orbit.prototype = Object.create(Node.prototype);
Orbit.prototype.constructor = Node;

Orbit.prototype.draw = function(){
};