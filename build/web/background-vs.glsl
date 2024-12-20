#version 300 es
in vec4 vertexPosition;
in vec4 vertexTexCoord;

uniform struct {
	mat4 viewProjMatrixInverse;
	} camera;
out vec4 texCoord;

void main(void) {
  gl_Position = vertexPosition;
  float scale = -0.02;
  float translate = -0.5f;
  texCoord = (vertexPosition * camera.viewProjMatrixInverse * scale + translate);
  //texCoord.xy *= -1.0;
}
