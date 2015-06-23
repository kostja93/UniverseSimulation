// https://developer.mozilla.org/en-US/docs/Web/Guide/API/Gamepad

var GameController = function(node){
    // Knoten der durch den Controller gesteuert werden soll (z.B. die Kamera)
    this.node = node;

    this.registerEvents();
}

GameController.prototype.registerEvents = function(){
    
    window.addEventListener("gamepadconnected", function(e) { gp.connecthandler(e.gamepad);});
    window.addEventListener("gamepaddisconnected", function(e) { gp.disconnecthandler(e.gamepad);});

    var gp = new Object();
    gp.connected = this.connected;
    
    gp.connecthandler = function(gamepad) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          gamepad.index, gamepad.id, gamepad.buttons.length, gamepad.axes.length);
        gp.controller = gamepad;
    }
    gp.disconnecthandler = function(gamepad) {
        if(gp.controller.index == gamepad.index){
          console.log("Gamepad disconnected from index %d: %s", gamepad.index, gamepad.id);
          delete gp.controller;
        }
    }

    this.gp = gp;

}

GameController.prototype.isConnected = function() {
    return typeof this.gp.controller != "undefined";
}

GameController.prototype.buttonAction = function(buttonidx){
    // Beispielcode
    console.log("Button pressed:", buttonidx);
    var radians = Math.PI / 100.0;
    switch (buttonidx) {
        case 0: this.node.move([0, 0, 0.1]); break;
        case 1: this.node.move([0.1, 0, 0]); break;
        case 2: this.node.move([-0.1, 0, 0]); break;
        case 3: this.node.move([0, 0, -0.1]); break;
        case 4: this.node.rotateY(radians); break;
        case 5: this.node.rotateY(-radians); break;
    }
}

GameController.prototype.axesAction = function(axes){
    // Beispielcode zum auslesen der Werte von Stick 3
    if(axes[3].toFixed(3)>0.1||axes[3].toFixed(3)<-0.1){
      console.log("Axis 3:", axes[3].toFixed(3));
    }

    /**
     Hier Code einfügen
    **/
}

// updateStatus() wird vor jedem Zeichnen der Szene aufgerufen
GameController.prototype.updateStatus = function() {
    
    if(!this.isConnected()){
        return;
    }

    var controller = this.gp.controller;

    for (i = 0; i < controller.buttons.length; i++){
        var val = controller.buttons[i];
        var pressed = val == 1.0;
        if (typeof(val) == "object"){
            pressed = val.pressed;
            val = val.value;
        }

        if (pressed){
            console.log(i);
            this.buttonAction(i);
        } 
    }

    this.axesAction(controller.axes);   
}
