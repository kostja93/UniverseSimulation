var Light = function(position, ambient, diffuse, specular){
    Node.call(this);
    
    this.position = vec4.set(vec4.create(), position[0], position[1], position[2], position[3]);
    this.worldposition = vec4.clone(this.position);
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
};

//Inherit from Node
Light.prototype = Object.create(Node.prototype);
Light.prototype.constructor = Node;

Light.prototype.updatePosition = function(mvMatrix){
    mat4.mul(this.worldposition, mvMatrix, this.position);
};

Light.prototype.draw = function(){
    gl.uniform4fv(shaderProgram.lightPosition, this.worldposition);
    gl.uniform4fv(shaderProgram.lightAmbient, this.ambient);
    gl.uniform4fv(shaderProgram.lightDiffuse, this.diffuse);
    gl.uniform4fv(shaderProgram.lightSpecular, this.specular);
};
