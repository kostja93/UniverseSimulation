// globale Variablen
var gl;
var quader;
var universeGraph;
var shaderProgram;
var modelViewMatrix = mat4.create();
var projectionMatrix = mat4.create();
var keyboard;
var cam;

// globale Funktionen
function webGLStart() {
    var canvas = document.getElementById("glCanvas");
    initGL(canvas);
    initShaders();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    console.log(gl.getParameter(gl.VERSION));
    console.log(gl.getParameter(gl.SHADING_LANGUAGE_VERSION));

    universeGraph = initSceneGraph(modelViewMatrix);

    drawScene();
}

function initGL(canvas) {
    try {
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
    } catch (e) {
    }
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

function initShaders() {
    var fragmentShader = getShaderFromHTML("shader-fs");
    var vertexShader = getShaderFromHTML("shader-vs");

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aNormalPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);

    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uProjectionMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uModelViewMatrix");
    shaderProgram.nMatrixUniform = gl.getUniformLocation(shaderProgram, "uNormalMatrix");

    // light and material variables

    shaderProgram.lightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    shaderProgram.lightAmbient = gl.getUniformLocation(shaderProgram, "uLightAmbient");
    shaderProgram.lightDiffuse = gl.getUniformLocation(shaderProgram, "uLightDiffuse");
    shaderProgram.lightSpecular = gl.getUniformLocation(shaderProgram, "uLightSpecular");

    shaderProgram.materialEmission = gl.getUniformLocation(shaderProgram, "uMaterialEmission");
    shaderProgram.materialAmbient = gl.getUniformLocation(shaderProgram, "uMaterialAmbient");
    shaderProgram.materialDiffuse = gl.getUniformLocation(shaderProgram, "uMaterialDiffuse");
    shaderProgram.materialSpecular = gl.getUniformLocation(shaderProgram, "uMaterialSpecular");
    shaderProgram.materialShininess = gl.getUniformLocation(shaderProgram, "uMaterialShininess");

}

function getShaderFromHTML(id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function drawScene() {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    universeGraph.draw();

    // Ermöglicht Echtzeit Rendering und Animation
    window.requestAnimationFrame(drawScene)
}