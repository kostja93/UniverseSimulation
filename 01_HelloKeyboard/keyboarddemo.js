// KeyboardDemo Prototype
var KeyboardDemo = function()
{

}

KeyboardDemo.prototype.registerEvents = function() {
    document.addEventListener('keydown', function(event) { Key.keyControl(event); });

    var Key = {
        keyboardDemo: this,
        keyControl: function (event) {
            var keyboardDemo = this.keyboardDemo;
            
            keyboardDemo.doSomething(event.keyCode);
            
        }
    }

}

KeyboardDemo.prototype.doSomething = function(code)
{
	console.log('KeyCode: ' + code);
}