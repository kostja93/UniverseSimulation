/**
 * Created by kostja on 10.05.15.
 **/

var Quader = function (matrix) {
    GeometricObject.call(this);

    var A = matrix[0],
        B = matrix[1],
        C = matrix[2],
        D = matrix[3],
        E = matrix[4],
        F = matrix[5],
        G = matrix[6],
        H = matrix[7];

    this.shape.push(new Square([A, B, C, D]));
    this.shape.push(new Square([D, C, G, H]));
    this.shape.push(new Square([G, H, E, F]));
    this.shape.push(new Square([F, B, A, E]));
    this.shape.push(new Square([E, A, D, H]));
    this.shape.push(new Square([B, C, G, F]));
};

Quader.prototype = Object.create(GeometricObject.prototype);
Quader.prototype.constructor = GeometricObject;