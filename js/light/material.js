var Material = function(emission, ambient, diffuse, specular, shininess){
    Node.call(this);

    this.emission = emission;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
};

//Inherit from Node
Material.prototype = Object.create(Node.prototype);
Material.prototype.constructor = Node;

Material.prototype.draw = function(){
    gl.uniform4fv(shaderProgram.materialEmission, this.emission);
    gl.uniform4fv(shaderProgram.materialAmbient, this.ambient);
    gl.uniform4fv(shaderProgram.materialDiffuse, this.diffuse);
    gl.uniform4fv(shaderProgram.materialSpecular, this.specular);
    gl.uniform1f(shaderProgram.materialShininess, this.shininess);
};