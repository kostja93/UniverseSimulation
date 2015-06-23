/**
 * Created by kostja93 on 23.06.15.
 */
var BorgOrbit = function (fromCam, tiltToCam) {
    Node.call(this);
    this.distance = fromCam;
    this.tilt = degToRad(tiltToCam);

    this.move([0, 0, -this.distance]);
};

BorgOrbit.prototype = Object.create(Node.prototype);
BorgOrbit.prototype.constructor = Node;

BorgOrbit.prototype.rotateY = function (radians) {
    this.move([0, 0, -this.distance]);
    mat4.rotateY(this.model, this.model, radians);
    this.move([0, 0, this.distance]);
};