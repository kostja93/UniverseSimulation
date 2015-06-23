/**
 * Created by kostja93 on 19.06.15.
 */
var BorgCubus = function () {
    Node.call(this);

    var length = 0.35;
    var material = new Material([0.0, 0.0, 0.0, 1.0], [0.19, 0.19, 0.19, 1.0], [0.51, 0.51, 0.51, 1.0], [0.51, 0.51, 0.51, 1.0], 51.2);
    var texture  = new Texture("assets/textures/borg-cube.jpg");
    var quader   = new Quader(length, length, length);

    this.move([0, -0.3, 4]);

    material.addChild(texture);
    texture.addChild(quader);

    this.addChild(material);
};

BorgCubus.prototype = Object.create(Node.prototype);
BorgCubus.prototype.constructor = Node;

BorgCubus.prototype.rotateY = function (radians) {
    this.move([0, 0.3, -4]);
    this.rotateY(radians);
    this.move([0, -0.3, 4]);
};