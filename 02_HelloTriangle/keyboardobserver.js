/**
 * Created by kostja93 on 25.05.15.
 */

var KeyboardObserver = function () {
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
    var number = 100.0;

    if (code == 65 || code == 37) { // a or <-
        mat4.rotateY(modelViewMatrix, modelViewMatrix, -Math.PI/number);
    } else if (code == 68 || code == 39) {// d or ->
        mat4.rotateY(modelViewMatrix, modelViewMatrix,  Math.PI/number);
    } else if (code == 87 || code == 38) {
        mat4.rotateX(modelViewMatrix, modelViewMatrix, -Math.PI/number);
    } else if (code == 83 || code == 40) {
        mat4.rotateX(modelViewMatrix, modelViewMatrix,  Math.PI/number);
    } else if (code == 81) {
        mat4.rotateZ(modelViewMatrix, modelViewMatrix, -Math.PI/number);
    } else if (code == 69) {
        mat4.rotateZ(modelViewMatrix, modelViewMatrix,  Math.PI/number);
    }
};