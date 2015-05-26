/**
 * Created by kostja93 on 25.05.15.
 */

var KeyboardObserver = function (camera) {
    this.camera = camera;
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

KeyboardObserver.prototype.keyPressed = function (code) {
    console.log(code + " was pressed");
    var radians = Math.PI / 100.0;

    if (code == 65 || code == 37) { // a or <-
        this.camera.rotateY(-radians);
    } else if (code == 68 || code == 39) {// d or ->
        this.camera.rotateY(radians);
    } else if (code == 87 || code == 38) {
        this.camera.rotateX(-radians);
    } else if (code == 83 || code == 40) {
        this.camera.rotateX(radians);
    } else if (code == 81) {
        this.camera.rotateZ(-radians);
    } else if (code == 69) {
        this.camera.rotateZ(radians);
    }
};