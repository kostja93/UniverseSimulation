var MatrixStack = function(){
	this.stack = [];
};

MatrixStack.prototype.push = function(m){
	this.stack.push(mat4.clone(m));
};

MatrixStack.prototype.pop = function(){
	return mat4.clone(this.stack.pop());
};