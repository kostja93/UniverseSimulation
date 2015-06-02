var Scenegraph = function(rootNode){
    this.root = rootNode;
};

Scenegraph.prototype.drawTraversal = function(node){

    var children = node.getChildren();
    for(var c = 0; c < children.length; c++){
        this.drawTraversal(children[c]);
    }

};

Scenegraph.prototype.draw = function(){

    this.drawTraversal(this.root);

};
