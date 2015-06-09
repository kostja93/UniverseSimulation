/**
 * Created by kostja on 10.05.15.
 */

var GeometricObject = function () {
    Node.call(this);
    this.shape = [];
};

GeometricObject.prototype = Object.create(Node.prototype);
GeometricObject.prototype.constructor = Node;

GeometricObject.prototype.draw = function () {
    this.shape.forEach(function(el){el.draw();});
};
