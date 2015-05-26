/**
 * Created by kostja93 on 26.05.15.
 */
var Camera = function (matrix) {
    this.projection = matrix;
};

Camera.prototype.rotateX = function (radians) {
    mat4.rotateX(this.projection, this.projection, radians);
};

Camera.prototype.rotateY = function (radians) {
    mat4.rotateY(this.projection, this.projection, radians);
};

Camera.prototype.rotateZ = function (radians) {
    mat4.rotateZ(this.projection, this.projection, radians);
};

Camera.prototype.perspective = function (fudgeFactor) {
    var perspactiveProjection = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1
    ];
    mat4.multiply(this.projection, this.projection, perspactiveProjection);
};