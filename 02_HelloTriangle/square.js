var Square = function(v1, v2, v3, v4) {
    GeometricObject.call(this);

    this.shape.push( new Triangle(v2,v1,v3));
    this.shape.push( new Triangle(v3,v1,v4) );
};

Square.prototype = Object.create(GeometricObject.prototype);
Square.prototype.constructor = GeometricObject;