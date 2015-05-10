var Square = function(matrix) {
    GeometricObject.call(this);

    var pointA = matrix[0],
        pointB = matrix[1],
        pointC = matrix[2],
        pointD = matrix[3],
        v1 = vec3.create(),
        v2 = vec3.create(),
        v3 = vec3.create();

    vec3.set(v1, pointA[0], pointA[1], pointA[2]);
    vec3.set(v2, pointB[0], pointB[1], pointB[2]);
    vec3.set(v3, pointC[0], pointC[1], pointC[2]);

    this.shape.push( new Triangle(v1,v2,v3));

    vec3.set(v2, pointC[0], pointC[1], pointC[2]);
    vec3.set(v3, pointD[0], pointD[1], pointD[2]);

    this.shape.push( new Triangle(v1,v2,v3) );
};

Square.prototype = Object.create(GeometricObject.prototype);
Square.prototype.constructor = GeometricObject;