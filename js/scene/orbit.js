var Orbit = function(radius, rotation, rotationSpeed) {
    Node.call(this);
    this.radius = radius / 50;
    this.rotation = degToRad(rotation);
    this.rotationSpeed = rotationSpeed;

    this.rotateZ(this.rotation);
    this.move([this.radius, 0, 0]);
};

Orbit.prototype = Object.create(Node.prototype);
Orbit.prototype.constructor = Node;

Orbit.prototype.draw = function(){
    this.move([-this.radius, 0, 0]);
    this.rotateY(this.rotationSpeed * Math.PI/1000.0);
    this.move([this.radius, 0, 0]);
};