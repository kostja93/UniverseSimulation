/**
 * Created by kostja on 10.05.15.
 **/

var Quader = function (width, height, depth) {
    GeometricObject.call(this);

    var A = vec3.create(),
        B = vec3.create(),
        C = vec3.create(),
        D = vec3.create(),
        E = vec3.create(),
        F = vec3.create(),
        G = vec3.create(),
        H = vec3.create(),
        halfWidth  = width/ 2,
        halfHeight = height/2,
        halfDepth  = depth/2;

    vec3.set(A, -halfWidth,  halfHeight,  halfDepth);
    vec3.set(B, -halfWidth, -halfHeight,  halfDepth);
    vec3.set(C,  halfWidth, -halfHeight,  halfDepth);
    vec3.set(D,  halfWidth,  halfHeight,  halfDepth);

    vec3.set(E, -halfWidth,  halfHeight, -halfDepth);
    vec3.set(F, -halfWidth, -halfHeight, -halfDepth);
    vec3.set(G,  halfWidth, -halfHeight, -halfDepth);
    vec3.set(H,  halfWidth,  halfHeight, -halfDepth);

    this.shape.push(new Square(A, B, C, D));
    this.shape.push(new Square(D, C, G, H));
    this.shape.push(new Square(H, G, F, E));
    this.shape.push(new Square(E, F, B, A));
    this.shape.push(new Square(E, A, D, H));
    this.shape.push(new Square(B, F, G, C));
};

Quader.prototype = Object.create(GeometricObject.prototype);
Quader.prototype.constructor = GeometricObject;