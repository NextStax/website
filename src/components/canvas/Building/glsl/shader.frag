  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;

  void main() {
    vec3 color2 = vec3(0.0, 0.0, 0.0);
    vec3 outColor = mix(color, color2, gl_FragCoord.x);
    gl_FragColor = vec4(outColor, 1);
  }
