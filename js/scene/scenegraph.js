var Scenegraph = function(rootNode){
    this.root = rootNode;
    this.model = mat4.create();
    mat4.identity(this.model);
    this.matrixStack = new MatrixStack();
};

Scenegraph.prototype.drawTraversal = function(node){
    this.matrixStack.push(this.model);
    mat4.multiply(this.model, this.model, node.model);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, this.model);
    node.draw();
    var children = node.getChildren();
    for(var c = 0; c < children.length; c++){
        this.drawTraversal(children[c]);
    }
    this.model = this.matrixStack.pop();
};

Scenegraph.prototype.draw = function(){
    mat4.identity(this.model);
    this.drawTraversal(this.root);

};
