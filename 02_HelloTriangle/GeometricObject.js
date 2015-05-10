/**
 * Created by kostja on 10.05.15.
 */

var GeometricObject = function () {
    this.shape = [];
};

GeometricObject.prototype.draw = function () {
    for(var i = 0; i < this.shape.length; i++) {
        this.shape[i].draw();
    }
};
