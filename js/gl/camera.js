/**
 * Created by kostja93 on 26.05.15.
 */
var Camera = function (matrix, model) {
    Node.call(this);
    this.projection = matrix;
    this.model      = model;
};

Camera.prototype = Object.create(Node.prototype);
Camera.prototype.constructor = Node;

Camera.prototype.perspective = function (fovy, aspect, near, far) {
    mat4.perspective(this.projection, fovy, aspect, near, far);
    this.move([0,0, -5]);
};