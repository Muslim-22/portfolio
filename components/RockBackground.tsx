"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

interface RockExplosionProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
  lineColor?: string;
  speed?: number;
  scale?: number;
  rotation?: number;
  rotationSpeed?: number;
  layers?: number;
  threads?: number;
  glow?: number;
  brightness?: number;
  mouseInteraction?: boolean;
  paused?: boolean;
}

const vertexShader = `#version 300 es
in vec2 aPosition;

void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const fragmentShader = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uScale;
uniform float uRotation;
uniform float uLayers;
uniform float uThreads;
uniform float uGlow;
uniform float uBrightness;
uniform vec3 uGlowColor;
uniform vec3 uLineColor;
uniform vec2 uMouse;
uniform float uMouseActive;

out vec4 outColor;

const float PI = 3.14159265359;

mat2 rotate2d(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 uv = (2.0 * gl_FragCoord.xy - uResolution)
            / uResolution.y;

  vec2 p = uv / max(uScale, 0.05);
  p = rotate2d(uRotation) * p;

  vec2 mouse = uMouse / uResolution.y;
  p += (uv - mouse) * uMouseActive * 0.12;

  float fibers = 0.0;
  float halo = 0.0;

  for (int i = 0; i < 10; i++) {
    float fi = float(i) + 1.0;

    if (fi > uLayers) break;

    vec2 wave = sin(
      p.yx * (fi * 3.0) + uTime * (0.4 + fi * 0.1)
    );

    p += wave * 0.018;

    float radius = length(p);
    float angle = atan(p.y, p.x);

    angle += sin(radius * 5.0 - uTime + fi) * 0.12;

    vec2 warped = vec2(cos(angle), sin(angle)) * radius;

    float strand = warped.x * (4.0 + uThreads);
    strand += sin(warped.y * 2.0 + uTime) * 0.5;

    float line = abs(sin(strand * PI));
    float width = 0.025 / max(uThreads, 1.0);

    float fiber = exp(-line / max(width, 0.001));

    float noise = 0.6 + 0.4 * hash(
      vec2(floor(strand * 4.0), fi)
    );

    fibers += fiber * noise / fi;
    halo += exp(-abs(sin(strand)) * 5.0) / fi;
  }

  float center = exp(-2.0 * dot(uv, uv));
  float vignette = 1.0 - smoothstep(0.3, 1.4, length(uv));

  float glow = halo * uGlow * 0.2 + center * uGlow * 0.1;

  vec3 color = uLineColor * fibers * 0.55;
  color += uGlowColor * glow;
  color *= uBrightness * vignette;

  color = 1.0 - exp(-max(color, vec3(0.0)));

  float alpha = clamp(
    max(max(color.r, color.g), color.b) * 1.5,
    0.0,
    1.0
  );

  outColor = vec4(color, alpha);
}`;

function createShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);

  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader xatosi:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGL2RenderingContext): WebGLProgram | null {
  const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
  const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);

  if (!vertex || !fragment) return null;

  const program = gl.createProgram();

  if (!program) return null;

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);

  gl.deleteShader(vertex);
  gl.deleteShader(fragment);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("WebGL program xatosi:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function parseColor(color: string): [number, number, number] {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) return [0.5, 0.8, 1];

  context.fillStyle = color;
  const normalized = context.fillStyle;

  if (normalized.startsWith("#")) {
    let hex = normalized.slice(1);

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((v) => v + v)
        .join("");
    }

    if (/^[0-9a-f]{6}$/i.test(hex)) {
      return [
        parseInt(hex.slice(0, 2), 16) / 255,
        parseInt(hex.slice(2, 4), 16) / 255,
        parseInt(hex.slice(4, 6), 16) / 255,
      ];
    }
  }

  const match = normalized.match(
    /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/,
  );

  if (match) {
    return [
      Number(match[1]) / 255,
      Number(match[2]) / 255,
      Number(match[3]) / 255,
    ];
  }

  return [0.5, 0.8, 1];
}

export default function RockExplosion({
  glowColor = "#84cc16",
  lineColor,
  speed = 0.4,
  scale = 1.8,
  rotation = 0,
  rotationSpeed = 0.15,
  layers = 5,
  threads = 4,
  glow = 2,
  brightness = 1.5,
  mouseInteraction = true,
  paused = false,
  className = "",
  ...attributes
}: RockExplosionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const settingsRef = useRef({
    glowColor,
    lineColor,
    speed,
    scale,
    rotation,
    rotationSpeed,
    layers,
    threads,
    glow,
    brightness,
    mouseInteraction,
    paused,
  });



  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
    });

    if (!gl) {
      console.error("Brauzering WebGL2 ni qo‘llab-quvvatlamaydi.");
      return;
    }

    const program = createProgram(gl);

    if (!program) return;

    const buffer = gl.createBuffer();
    const vao = gl.createVertexArray();

    if (!buffer || !vao) {
      gl.deleteProgram(program);
      return;
    }

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "aPosition");

    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    const uniformNames = [
      "uResolution",
      "uTime",
      "uScale",
      "uRotation",
      "uLayers",
      "uThreads",
      "uGlow",
      "uBrightness",
      "uGlowColor",
      "uLineColor",
      "uMouse",
      "uMouseActive",
    ];

    const uniforms: Record<string, WebGLUniformLocation | null> = {};

    for (const name of uniformNames) {
      uniforms[name] = gl.getUniformLocation(program, name);
    }

    let animationId = 0;
    let time = 0;
    let lastTime = 0;
    let width = 1;
    let height = 1;
    let mouseX = 0;
    let mouseY = 0;
    let mouseActive = 0;
    let visible = true;
    let disposed = false;

    const resize = () => {
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);

      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));

      gl.viewport(0, 0, canvas.width, canvas.height);
      draw();
    };

    const draw = () => {
      if (disposed) return;

      const s = settingsRef.current;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      gl.uniform2f(uniforms.uResolution, canvas.width, canvas.height);
      gl.uniform1f(uniforms.uTime, time);
      gl.uniform1f(uniforms.uScale, Math.max(0.05, s.scale));
      gl.uniform1f(
        uniforms.uRotation,
        ((s.rotation + time * s.rotationSpeed * 30) * Math.PI) / 180,
      );
      gl.uniform1f(uniforms.uLayers, Math.max(1, Math.min(10, s.layers)));
      gl.uniform1f(uniforms.uThreads, Math.max(1, Math.min(16, s.threads)));
      gl.uniform1f(uniforms.uGlow, Math.max(0, s.glow));
      gl.uniform1f(uniforms.uBrightness, Math.max(0, s.brightness));

      const glowRgb = parseColor(s.glowColor);
      const lineRgb = parseColor(s.lineColor || "#e4ffb5");

      gl.uniform3f(uniforms.uGlowColor, glowRgb[0], glowRgb[1], glowRgb[2]);

      gl.uniform3f(uniforms.uLineColor, lineRgb[0], lineRgb[1], lineRgb[2]);

      gl.uniform2f(uniforms.uMouse, mouseX, mouseY);
      gl.uniform1f(uniforms.uMouseActive, s.mouseInteraction ? mouseActive : 0);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    };

    const frame = (now: number) => {
      animationId = 0;

      if (disposed || !visible || document.hidden) return;

      const s = settingsRef.current;
      const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;

      lastTime = now;

      if (!s.paused) {
        time += delta * s.speed;
      }

      draw();

      if (!s.paused) {
        animationId = requestAnimationFrame(frame);
      }
    };

    const wake = () => {
      if (
        !disposed &&
        visible &&
        !document.hidden &&
        !animationId &&
        !settingsRef.current.paused
      ) {
        animationId = requestAnimationFrame(frame);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();

      mouseX = ((event.clientX - rect.left) * canvas.width) / width;
      mouseY = ((height - (event.clientY - rect.top)) * canvas.height) / height;

      mouseActive =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
          ? 1
          : 0;

      draw();
    };

    const onPointerLeave = () => {
      mouseActive = 0;
      draw();
    };

    const onVisibilityChange = () => {
      lastTime = 0;

      if (document.hidden) {
        cancelAnimationFrame(animationId);
        animationId = 0;
      } else {
        wake();
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const intersection = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);

      if (visible) {
        lastTime = 0;
        wake();
      } else {
        cancelAnimationFrame(animationId);
        animationId = 0;
      }
    });

    intersection.observe(container);

    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });

    container.addEventListener("pointerleave", onPointerLeave);

    document.addEventListener("visibilitychange", onVisibilityChange);

    resize();
    wake();

    return () => {
      disposed = true;

      cancelAnimationFrame(animationId);
      observer.disconnect();
      intersection.disconnect();

      window.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);

      document.removeEventListener("visibilitychange", onVisibilityChange);

      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, []);

  useEffect(() => {
    if (paused) {
      // Effektni pauza holatiga o'tkazish
      return;
    }
  }, [paused]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full min-h-[300px] w-full overflow-hidden ${className}`}
      {...attributes}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
