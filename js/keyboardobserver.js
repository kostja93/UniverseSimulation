/**
 * Created by kostja93 on 25.05.15.
 */

var KeyboardObserver = function (camera) {
    this.cameras = [];
    this.cameras.push(camera);
};

KeyboardObserver.prototype.registerEvents = function() {
    document.addEventListener('keydown', function(event) { Key.keyControl(event); });

    var Key = {
        keyboardDemo: this,
        keyControl: function (event) {
            var keyboardDemo = this.keyboardDemo;

            keyboardDemo.keyPressed(event.keyCode);

        }
    }

};

KeyboardObserver.prototype.addCamera = function (camera) {
    this.cameras.push(camera);
};

KeyboardObserver.prototype.keyPressed = function (code) {
    //console.log(code + " was pressed");
    var radians = Math.PI / 100.0;

    if (code == 87 || code == 38) { //w
        this.cameras.forEach(function(cam) {cam.move([0, 0, -0.1]);});
    } else if (code == 83 || code == 40) { //s
        this.cameras.forEach(function(cam) {cam.move([0, 0, 0.1]);});
    } else if (code == 81) {
        this.cameras.forEach(function(cam) {cam.rotateY(radians);});
    } else if (code == 69) {
        this.cameras.forEach(function(cam) {cam.rotateY(-radians);});
    }
};