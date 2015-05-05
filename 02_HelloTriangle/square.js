var Square = function(matrix) {
    var v1 = vec3.create();
    var v2 = vec3.create();
    var v3 = vec3.create();

    vec3.set(v1, -0.75, 0.75, 0.0);
    vec3.set(v2, -0.75, -0.75, 0.0);
    vec3.set(v3, 0.75, -0.75, 0.0);

    this.triangle1 = new Triangle(v1,v2,v3);

    vec3.set(v1, -0.75, 0.75, 0.0);
    vec3.set(v2, 0.75, -0.75, 0.0);
    vec3.set(v3, 0.75, 0.75, 0.0);

    this.triangle2 = new Triangle(v1,v2,v3);
};

Square.prototype.draw = function() {
    this.triangle1.draw();
    this.triangle2.draw();
}