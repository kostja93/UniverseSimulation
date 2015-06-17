var Scenegraph = function(rootNode){
    this.root = rootNode;
    this.model = mat4.create();
    mat4.identity(this.model);
    this.stack = new MatrixStack();

    this.uNormalMatrix = mat3.create();
    mat3.invert(this.uNormalMatrix, this.model);
    mat3.transpose(this.uNormalMatrix, this.uNormalMatrix);
};

Scenegraph.prototype.drawTraversal = function(node){
    this.stack.push(this.model);

    if(node instanceof Light) {
        node.updatePosition(this.model);
    }

    mat4.multiply(this.model, this.model, node.getModel());
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, this.model);

    mat3.normalFromMat4(this.uNormalMatrix, this.model);
    gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, this.uNormalMatrix);

    node.draw();
    var children = node.getChildren();
    for(var c = 0; c < children.length; c++){
        this.drawTraversal(children[c]);
    }
    this.model = this.stack.pop();
};

Scenegraph.prototype.draw = function(){
    mat4.identity(this.model);
    this.drawTraversal(this.root);

};
