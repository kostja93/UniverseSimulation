var Sphere = function(radius){
    Node.call(this);

    this.vertexPositionData = [];

    latitudeBands = 100;
    longitudeBands = 100;
    
    // Erzeuge Punkte, auf den Breiten- (latitudeBands) und Längengraden (longitudeBands) einer Kugel
    for (var i=0; i <= latitudeBands; i++) {
        var theta = i * Math.PI / latitudeBands;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);
        for (var j=0; j <= longitudeBands; j++) {
            var phi = j * 2 * Math.PI / longitudeBands;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);
            var x = sinTheta * sinPhi;
            var y = cosTheta;
            var z = cosPhi * sinTheta;
            this.vertexPositionData.push(radius * x);
            this.vertexPositionData.push(radius * y);
            this.vertexPositionData.push(radius * z);
        }
    }

    // Erzeuge Reihenfolge, in der die Punkte gezeichnet werden sollen
    this.indexData = [];
    for (var i=0; i < latitudeBands; i++) {
        for (var j=0; j < longitudeBands; j++) {
            var idx0 = (i * (longitudeBands + 1)) + j;
            var idx1 = idx0 + longitudeBands + 1;
            var idx2 = idx0 + 1;
            var idx3 = idx1 + 1;;
            this.indexData.push(idx0); 
            this.indexData.push(idx1);
            this.indexData.push(idx2); 
            this.indexData.push(idx3);
        }       
    }
    
       
    // Zeichne Kugel mit TRIANGLE_STRIPs 
    // 
    //  ... * - * - * ...
    //      |  /|  /|
    //      | / | / |
    //  ... * - * - * ...
    //      .
    //      .
    //      0   2   4
    //  ... * - * - * ...   
    //      |  /|  /|
    //      | / | / |             
    //  ... * - * - * ... 
    //      1   3   5
    //      .
    //      .
    //  ... * - * - * ...
    //      |  /|  /|
    //      | / | / |             
    //  ... * - * - * ...
      
    this.initBuffers();
};


//Inherit from Node
Sphere.prototype = Object.create(Node.prototype);
Sphere.prototype.constructor = Node;

Sphere.prototype.initBuffers = function(){
    this.vertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertexPositionData), gl.STATIC_DRAW);

    this.vertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), gl.STATIC_DRAW);
}

Sphere.prototype.bindBuffers = function(){
    // Binden des Buffers immer vor vertexAttribPointer() durchführen! 
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPositionBuffer); 
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
}

Sphere.prototype.draw = function(){

    this.bindBuffers();

    //Zeichnet Elemente im Array-Buffer gemäß Element-Indices im Index-Buffer
    gl.drawElements(gl.TRIANGLE_STRIP, this.indexData.length, gl.UNSIGNED_SHORT, 0);
};