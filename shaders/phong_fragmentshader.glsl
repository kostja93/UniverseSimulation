#ifdef GL_ES
    precision mediump float;
#endif

uniform vec4 uLightPosition;
uniform vec4 uLightAmbient;
uniform vec4 uLightDiffuse;
uniform vec4 uLightSpecular;

uniform vec4 uMaterialEmission;
uniform vec4 uMaterialAmbient;
uniform vec4 uMaterialDiffuse;
uniform vec4 uMaterialSpecular;
uniform float uMaterialShininess;

varying vec3 vVertexPos;
varying vec3 vNormalPos;


void main(void) {
    vec3 N = normalize(vNormalPos);
    vec4 emissiv = uMaterialEmission;
    vec4 ambient = uMaterialAmbient * uLightAmbient;
    vec3 Eye = vec3(0.0, 0.0, 1.0);
    vec3 L = vec3(0.0);
    vec3 H = vec3(0.0);

    if(uLightPosition.w == 0.0){
        L = normalize(vec3(uLightPosition));
    }
    else {
        L = normalize(vec3(uLightPosition) - vVertexPos);
    }

    H = normalize(L + Eye);

    vec4 specular = vec4(0.0, 0.0, 0.0, 1.0);
    float a = max(dot(N, L), 0.0);
    if (a > 0.0) {      
        float specLight = pow(max(dot(H, N), 0.0), uMaterialShininess);
        specular = specLight * uMaterialSpecular * uLightSpecular;
    }
    gl_FragColor = emissiv + ambient + specular;
}