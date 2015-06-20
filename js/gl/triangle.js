var Triangle = function(v1, v2, v3){
    this.vertices = [
        v1[0], v1[1], v1[2],
        v2[0], v2[1], v2[2],
        v3[0], v3[1], v3[2]
    ];
    
	this.normal = vec3.create();
    this.a = vec3.create();
    this.b = vec3.create();

    vec3.sub(this.a, v1, v2);
    vec3.sub(this.b, v2, v3);

    vec3.cross(this.normal, this.a, this.b);

    vec3.normalize(this.normal, this.normal);

    this.normalVertices = [
	this.normal[0], this.normal[1], this.normal[2],
	this.normal[0], this.normal[1], this.normal[2],
	this.normal[0], this.normal[1], this.normal[2]
    ];


    this.initBuffers();
};

//Add Functions to the Triangle prototype
Triangle.prototype.initBuffers = function(){
    this.triangleVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    
    this.triangleNormalPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleNormalPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normalVertices), gl.STATIC_DRAW);

    this.textureCoordinates = [
        // vorne
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // hinten
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // oben
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // unten
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // rechts
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // links
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
    ];
    this.textureBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), gl.STATIC_DRAW);
};

Triangle.prototype.draw = function(){
    gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
 
    gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleNormalPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
    gl.vertexAttribPointer(shaderProgram.textureCoordinatesAttribute, 2, gl.FLOAT, false, 0, 0);
    
    gl.drawArrays(gl.TRIANGLES, 0, 3);
};
