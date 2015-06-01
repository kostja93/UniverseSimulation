var Scenegraph = function(rootNode){
    this.root = rootNode;
};

Scenegraph.prototype.drawTraversal = function(node){
    this.logString = node.draw();

    var children = node.getChildren();
    for(var c = 0; c < children.length; c++){
        this.drawTraversal(children[c]);
    }

};

Scenegraph.prototype.draw = function(){
    // setze logString bei jedem neuen Zeichnen des Szenengraphen auf ""
    this.drawTraversal(this.root);

}
