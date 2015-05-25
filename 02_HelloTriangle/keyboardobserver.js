/**
 * Created by kostja93 on 25.05.15.
 */

var KeyboardObserver = function () {
    this.listener = [];
};

KeyboardObserver.prototype.registerEvents = function() {
    document.addEventListener('keydown', function(event) { Key.keyControl(event); });

    var Key = {
        keyboardDemo: this,
        keyControl: function (event) {
            var keyboardDemo = this.keyboardDemo;

            keyboardDemo.doSomething(event.keyCode);

        }
    }

};

KeyboardObserver.prototype.addListener = function (listener) {
    this.listener.push(listener);
};

KeyboardObserver.prototype.keyPressed = function (code) {
    this.listener.forEach(function(el) {
        //TODO: implement validation of input and rotate the camera
    });
};