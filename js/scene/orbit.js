var Orbit = function(radius, rotation) {
    Node.call(this);
    this.radius = scale(radius);
    this.rotation = degToRad(rotation);
};

Orbit.prototype = Object.create(Node.prototype);
Orbit.prototype.constructor = Node;

Orbit.prototype.draw = function(){

};