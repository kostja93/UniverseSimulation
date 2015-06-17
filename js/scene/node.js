var Node = function(){
    this.children = [];
    this.model = mat4.create();
    mat4.identity(this.model);
};

Node.prototype.getChildren = function(){
  return this.children;
};

Node.prototype.addChild = function(node){
  this.children.push(node);
};

Node.prototype.draw = function(){
	
};

Node.prototype.rotateX = function (radians) {
    mat4.rotateX(this.model, this.model, radians);
};

Node.prototype.rotateY = function (radians) {
    mat4.rotateY(this.model, this.model, radians);
};

Node.prototype.rotateZ = function (radians) {
    mat4.rotateZ(this.model, this.model, radians);
};

Node.prototype.move = function (howFar) {
    mat4.translate(this.model, this.model, howFar);
};

Node.prototype.getModel = function () {
    return this.model;
}