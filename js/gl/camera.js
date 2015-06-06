/**
 * Created by kostja93 on 26.05.15.
 */
var Camera = function (matrix, model) {
    this.projection = matrix;
    this.model      = model;
};

Camera.prototype.rotateX = function (radians) {
    mat4.rotateX(this.model, this.model, radians);
};

Camera.prototype.rotateY = function (radians) {
    mat4.rotateY(this.model, this.model, radians);
};

Camera.prototype.rotateZ = function (radians) {
    mat4.rotateZ(this.model, this.model, radians);
};

Camera.prototype.move = function (howFar) {
    mat4.translate(this.model, this.model, howFar);
};

Camera.prototype.perspective = function (fovy, aspect, near, far) {
    mat4.perspective(this.projection, fovy, aspect, near, far);
    this.move([0,0, -5]);
};