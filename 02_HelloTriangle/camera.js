/**
 * Created by kostja93 on 26.05.15.
 */
var Camera = function (matrix) {
    this.matrix = matrix;
    console.log(matrix);
};

Camera.prototype.rotateX = function (radians) {
    mat4.rotateX(this.matrix, this.matrix, radians);
};

Camera.prototype.rotateY = function (radians) {
    mat4.rotateY(this.matrix, this.matrix, radians);
};

Camera.prototype.rotateZ = function (radians) {
    mat4.rotateZ(this.matrix, this.matrix, radians);
};

Camera.prototype.perspective = function (fudgeFactor) {
    var perspactiveMatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1
    ];
    mat4.multiply(this.matrix, this.matrix, perspactiveMatrix);
};