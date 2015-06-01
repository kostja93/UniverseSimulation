/**
 * Created by kostja on 10.05.15.
 */

var GeometricObject = function () {
    this.shape = [];
};

GeometricObject.prototype.draw = function () {
    this.shape.forEach(function(el){el.draw();});
};
