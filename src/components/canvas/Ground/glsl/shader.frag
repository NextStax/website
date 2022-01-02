  uniform vec3 color;
  uniform vec3 color2;
  varying vec2 vUv;

  void main() {
    vec2 center = vec2(0.5, 0.5);
    float distToCenter = length(vUv - center) * 5.0;
    float clampedDist = clamp(distToCenter, 0.0, 1.0);
    vec3 outColor = mix(color, color2, clampedDist);
    gl_FragColor = vec4(outColor, 1);
  }
