var Square = function(v1, v2, v3, v4) {
    GeometricObject.call(this);

    this.shape.push( new Triangle(v1,v2,v3, [0.0,  0.0, 0.0,  1.0, 1.0,  1.0 ]));
    this.shape.push( new Triangle(v3,v4,v1, [1.0,  1.0, 1.0,  0.0, 0.0,  0.0 ]));
};

Square.prototype = Object.create(GeometricObject.prototype);
Square.prototype.constructor = GeometricObject;