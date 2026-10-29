"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";
import { geckoHandPath, geckoHandViewBox } from "@/lib/gecko-hand";

// A fixed WebGL gecko hand in the brand gradient. Elements marked data-blob="x y size opacity"
// set where it sits while they cross the middle of the viewport (x, y in -1..1, size × min viewport side).
// On narrow screens data-blob-mobile is used instead, or a smaller, fainter version of data-blob.

const noise = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const vertexShader = /* glsl */ `
uniform float uTime; uniform vec2 uPointer;
varying vec3 vWorld; varying vec3 vObj; varying vec3 vNormal;
${noise}
void main(){
  vec3 p = position;
  // A slow, soft wobble so the hand feels alive without losing its silhouette.
  float n = snoise(p * 0.9 + vec3(uTime * 0.16, uTime * 0.1, 0.0));
  p += normal * n * 0.05;
  p.z += sin(p.x * 1.6 + uTime * 0.8) * 0.04 + dot(p.xy, uPointer) * 0.05;
  vObj = p;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(p, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;

const fragmentShader = /* glsl */ `
uniform float uTime; uniform float uAlpha;
varying vec3 vWorld; varying vec3 vObj; varying vec3 vNormal;
${noise}
void main(){
  // Smooth geometry normals keep the bevel glossy instead of faceted.
  vec3 n = normalize(vNormal);
  vec3 v = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 2.2);
  vec3 yellow = vec3(0.949, 0.965, 0.169);
  vec3 lime = vec3(0.639, 0.965, 0.0);
  vec3 cyan = vec3(0.0, 0.929, 0.855);
  vec3 deep = vec3(0.02, 0.36, 0.33);
  // Gradient runs across the hand (yellow bottom-left to cyan top-right), shaded by the surface.
  float g = 0.5 + 0.38 * vObj.y + 0.22 * vObj.x + 0.18 * n.y + 0.1 * snoise(vObj * 0.8 + uTime * 0.1);
  vec3 col = mix(cyan, lime, smoothstep(0.18, 0.55, g));
  col = mix(col, yellow, smoothstep(0.62, 0.95, g));
  float light = 0.7 + 0.3 * dot(n, normalize(vec3(-0.5, 0.7, 0.6)));
  float spec = pow(max(dot(reflect(-normalize(vec3(-0.4, 0.6, 0.7)), n), v), 0.0), 24.0);
  col = mix(deep, col, clamp(light, 0.0, 1.0));
  col += fres * vec3(0.9, 1.0, 0.85) * 0.45 + spec * 0.35;
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.045;
  // Feather the silhouette so the blob reads as soft light rather than a hard object.
  float edge = smoothstep(0.0, 0.45, dot(n, v));
  gl_FragColor = vec4(col, uAlpha * edge);
}`;

type Pose = { x: number; y: number; size: number; alpha: number };
const parse = (el: Element): Pose => {
  const narrow = window.innerWidth < 800;
  const mobile = narrow && el.getAttribute("data-blob-mobile");
  const [x = 0, y = 0, size = 0.6, alpha = 1] = (mobile || el.getAttribute("data-blob") || "").split(/\s+/).map(Number);
  return narrow && !mobile ? { x, y, size: size * 0.6, alpha: alpha * 0.6 } : { x, y, size, alpha };
};

// Extrude the logo outline into a rounded 3D hand, centred and scaled to fit a unit circle.
function handGeometry() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${geckoHandViewBox}"><path d="${geckoHandPath}"/></svg>`;
  const shapes = new SVGLoader().parse(svg).paths.flatMap((path) => SVGLoader.createShapes(path));
  const extruded = new THREE.ExtrudeGeometry(shapes, {
    depth: 34,
    curveSegments: 64,
    bevelEnabled: true,
    bevelThickness: 26,
    bevelSize: 18,
    bevelSegments: 14,
  });
  // Merge shared vertices so normals blend across the bevel rings instead of shading each ring flat.
  extruded.deleteAttribute("normal");
  extruded.deleteAttribute("uv");
  const geometry = mergeVertices(extruded, 1e-3);
  extruded.dispose();
  geometry.computeVertexNormals();
  geometry.center();
  // SVG y points down; a half turn about x flips it without reversing the faces.
  geometry.rotateX(Math.PI);
  geometry.computeBoundingSphere();
  const r = geometry.boundingSphere!.radius;
  geometry.scale(1 / r, 1 / r, 1 / r);
  return geometry;
}
const smooth = (t: number) => t * t * (3 - 2 * t);

export function BlobCanvas() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const anchors = useRef<Element[]>([]);

  useEffect(() => {
    // Re-read the markers once the new route has rendered.
    const id = window.setTimeout(() => { anchors.current = [...document.querySelectorAll("[data-blob]")]; }, 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const el = canvas.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch {
      el.classList.add("is-unsupported");
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 10;
    const uniforms = { uTime: { value: 0 }, uAlpha: { value: 0 }, uPointer: { value: new THREE.Vector2() } };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true });
    const mesh = new THREE.Mesh(handGeometry(), material);
    scene.add(mesh);

    const view = { w: 1, h: 1 };
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      view.h = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      view.w = view.h * camera.aspect;
    };
    resize();
    window.addEventListener("resize", resize);

    const pointer = new THREE.Vector2();
    const onPointer = (e: PointerEvent) => pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    window.addEventListener("pointermove", onPointer);

    const current: Pose = { x: 0, y: 0, size: 0.6, alpha: 0 };
    const target = (): Pose => {
      const mid = innerHeight / 2;
      const list = anchors.current.filter((a) => a.isConnected);
      if (!list.length) return { ...current, alpha: 0 };
      const d = list.map((a) => { const r = a.getBoundingClientRect(); return r.top + r.height / 2 - mid; });
      if (d[0] >= 0) return parse(list[0]);
      for (let i = 0; i < list.length - 1; i++) {
        if (d[i] <= 0 && d[i + 1] >= 0) {
          const t = smooth(-d[i] / (d[i + 1] - d[i]));
          const a = parse(list[i]);
          const b = parse(list[i + 1]);
          return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, size: a.size + (b.size - a.size) * t, alpha: a.alpha + (b.alpha - a.alpha) * t };
        }
      }
      return parse(list[list.length - 1]);
    };

    let frame = 0;
    let last = performance.now();
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (document.hidden) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = target();
      const k = 1 - Math.pow(0.0015, dt);
      current.x += (t.x - current.x) * k;
      current.y += (t.y - current.y) * k;
      current.size += (t.size - current.size) * k;
      current.alpha += (t.alpha - current.alpha) * k;
      if (!reduced) uniforms.uTime.value += dt;
      uniforms.uPointer.value.lerp(pointer, 0.04);
      uniforms.uAlpha.value = current.alpha;
      mesh.position.set((current.x * view.w) / 2, (-current.y * view.h) / 2, 0);
      mesh.scale.setScalar((current.size * Math.min(view.w, view.h)) / 2);
      // Sway rather than spin: a hand seen edge-on would disappear.
      const time = uniforms.uTime.value;
      mesh.rotation.y = Math.sin(time * 0.35) * 0.45 - uniforms.uPointer.value.x * 0.3;
      mesh.rotation.x = Math.sin(time * 0.27) * 0.2 - uniforms.uPointer.value.y * 0.25;
      mesh.rotation.z = -0.25 + Math.sin(time * 0.2) * 0.12;
      el.style.opacity = current.alpha < 0.01 ? "0" : "1";
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvas} className="blob-canvas" aria-hidden="true" />;
}
