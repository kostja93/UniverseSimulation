/**
 * Created by kostja93 on 26.05.15.
 */
var Camera = function () {
    Node.call(this);
    this.projection = mat4.create();
    mat4.identity(this.projection);
};

Camera.prototype = Object.create(Node.prototype);
Camera.prototype.constructor = Node;

Camera.prototype.perspective = function (fovy, aspect, near, far) {
    mat4.perspective(this.projection, fovy, aspect, near, far);
    this.move([0,0, -15]);
};

Camera.prototype.draw = function () {
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, this.projection);
};