/**
 * Created by kostja93 on 27.06.15.
 */
var Skybox = function(width) {
    GeometricObject.call(this);

    var A = vec3.create(),
        B = vec3.create(),
        C = vec3.create(),
        D = vec3.create(),
        E = vec3.create(),
        F = vec3.create(),
        G = vec3.create(),
        H = vec3.create(),
        halfWidth  = width/ 2;

    vec3.set(A, -halfWidth,  halfWidth,  halfWidth);
    vec3.set(B, -halfWidth, -halfWidth,  halfWidth);
    vec3.set(C,  halfWidth, -halfWidth,  halfWidth);
    vec3.set(D,  halfWidth,  halfWidth,  halfWidth);

    vec3.set(E, -halfWidth,  halfWidth, -halfWidth);
    vec3.set(F, -halfWidth, -halfWidth, -halfWidth);
    vec3.set(G,  halfWidth, -halfWidth, -halfWidth);
    vec3.set(H,  halfWidth,  halfWidth, -halfWidth);

    this.shape.push(new Square(D, C, B, A));
    this.shape.push(new Square(H, G, C, D));
    this.shape.push(new Square(E, F, G, H));
    this.shape.push(new Square(A, B, F, E));
    this.shape.push(new Square(H, D, A, E));
    this.shape.push(new Square(C, G, F, B));
};


Skybox.prototype = Object.create(GeometricObject.prototype);
Skybox.prototype.constructor = GeometricObject;