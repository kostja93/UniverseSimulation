var Scenegraph = function(rootNode){
    this.root = rootNode;
    this.model = mat4.create();
    mat4.identity(this.model);
    this.matrixStack = new MatrixStack();
};

Scenegraph.prototype.drawTraversal = function(node){
    node.draw();
    var children = node.getChildren();
    for(var c = 0; c < children.length; c++){
        this.drawTraversal(children[c]);
    }

};

Scenegraph.prototype.draw = function(){

    this.drawTraversal(this.root);

};
