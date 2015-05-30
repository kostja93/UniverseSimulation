/**
 * Created by kostja93 on 26.05.15.
 */
var Scenegraph = function (root) {
    this.root = root;
};

Scenegraph.prototype.drawTraversal = function (node) {
    node.draw();
    var children = node.getChildren();
    children.forEach(function(elem){
        this.drawTraversal(elem)
    });
};

Scenegraph.prototype.draw = function () {
    this.drawTraversal(this.root);
};