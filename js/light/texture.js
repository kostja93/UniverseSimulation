var Texture = function(src){
    Node.call(this);

    this.image = new Image();
    this.image.texture = gl.createTexture();
    this.image.onload = function() { 
        Texture.loadTexture(this, this.texture);
        console.log("Texture " + src + " loaded." );
    };
    this.image.onerror = function() { 
        console.warn("Could not load texture: " + src);
    };
    this.image.src = src;
    
    this.texture = this.image.texture;
};

//Inherit from Object3d/SGNode
Texture.prototype = Object.create(Node.prototype);
Texture.prototype.constructor = Node;

//Add Functions to the Node prototype

Texture.loadTexture = function(image, texture){
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    
    //Erlaube alle Größen von textures
    //(idealerweise haben textures die Seitengröße x^2)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); 
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); 

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.bindTexture(gl.TEXTURE_2D, null);
};

Texture.prototype.draw = function(){
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);
};