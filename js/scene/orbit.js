var Orbit = function(radius, rotation) {
    Node.call(this);
    this.radius = scale(radius);
    this.rotation = degToRad(rotation);

    mat4.rotateX(this.transformationMatrix, this.transformationMatrix, this.rotation);

    var translationVector = vec3.create();
    vec3.set(translationVector, this.radius, 0, 0);
    mat4.translate(this.transformationMatrix, this.transformationMatrix, translationVector);
};

Orbit.prototype = Object.create(Node.prototype);
Orbit.prototype.constructor = Node;

Orbit.prototype.draw = function(){
    var self = this;
    this.children.forEach( function(orbElem) {
        orbElem.appendTransformation(self.transformationMatrix);
    });
};