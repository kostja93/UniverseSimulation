var Node = function(){
    this.children = [];
    this.transformationMatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};

Node.prototype.getChildren = function(){
  return this.children;
};

Node.prototype.addChild = function(node){
  this.children.push(node);
};

Node.prototype.appendTransformation = function (transformationMatrix) {
    mat4.multiply(this.transformationMatrix, this.transformationMatrix, transformationMatrix);
};

Node.prototype.draw = function(){
	
};