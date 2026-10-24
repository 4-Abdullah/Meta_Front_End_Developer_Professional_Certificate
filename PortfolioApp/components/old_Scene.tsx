"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { orbitSkills } from "@/lib/data";

function label(text: string) {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 64;
  const x = c.getContext("2d")!;
  x.font = "600 30px sans-serif"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillStyle = "#fff";
  x.fillText(text, 128, 34);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.9 }));
  sp.scale.set(1.8, 0.45, 1);
  return sp;
}

export default function Scene() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const root = document.documentElement;
    const R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    R.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    cam.position.z = 9;
    const g = new THREE.Group();
    scene.add(g);

    const wire = (geo: THREE.BufferGeometry, o: number) => new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: o }));
    const core = wire(new THREE.SphereGeometry(2, 28, 18), 0.42);
    const inner = wire(new THREE.IcosahedronGeometry(1.2, 0), 0.9);
    g.add(core, inner);

    const total = orbitSkills.length;
    const rings: THREE.Mesh[] = [];
    const nodes = orbitSkills.map((n, i) => {
      const r = 2.9 + (i / (total - 1)) * 3.3;                       // each skill gets its own radius
      const pivot = new THREE.Group();                                // and its own tilted orbital plane
      pivot.rotation.set(Math.sin(i * 2.4) * 1.1, i * 0.9, Math.cos(i * 1.7) * 0.8);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.008, 6, 220), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.38 }));
      const sat = new THREE.Group();
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 16), new THREE.MeshBasicMaterial());
      const l = label(n);
      l.position.y = 0.32;
      sat.add(dot, l);
      pivot.add(ring, sat);
      g.add(pivot);
      rings.push(ring);
      return { sat, dot, l, r, a: (i / total) * Math.PI * 2, s: (0.4 * Math.pow(2.9 / r, 1.5) + 0.06) * (i % 2 ? 1 : -1) };
    });

    const N = 900, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 7 + Math.random() * 16, a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1);
      pos.set([r * Math.sin(b) * Math.cos(a), r * Math.sin(b) * Math.sin(a), r * Math.cos(b) - 6], i * 3);
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.05, transparent: true, opacity: 0.8 }));
    scene.add(pts);

    const colors = () => {
      const cs = getComputedStyle(root);
      const a = new THREE.Color(cs.getPropertyValue("--a").trim());
      const b = new THREE.Color(cs.getPropertyValue("--b").trim());
      const k = new THREE.Color(cs.getPropertyValue("--ink").trim());
      (core.material as THREE.MeshBasicMaterial).color = a;
      (inner.material as THREE.MeshBasicMaterial).color = b;
      rings.forEach((m, i) => ((m.material as THREE.MeshBasicMaterial).color = i % 2 ? b : a));
      (pts.material as THREE.PointsMaterial).color = k;
      nodes.forEach((n) => {
        (n.dot.material as THREE.MeshBasicMaterial).color = b;
        (n.l.material as THREE.SpriteMaterial).color = k;
      });
    };
    colors();
    const mo = new MutationObserver(colors);
    mo.observe(root, { attributes: true });
    const mq = matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", colors);

    const size = () => {
      const w = innerWidth, h = innerHeight;
      R.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      g.position.x = w > 900 ? 2.6 : 0;
      g.scale.setScalar(w > 900 ? 0.9 : 0.58);
    };
    size();

    let mx = 0, my = 0, sy = 0, raf = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = (e: PointerEvent) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; };
    const onScroll = () => { sy = scrollY / Math.max(1, document.body.scrollHeight - innerHeight); cv.style.opacity = String(Math.max(0.3, 1 - (scrollY / innerHeight) * 0.7)); };
    addEventListener("resize", size);
    addEventListener("pointermove", onMove);
    addEventListener("scroll", onScroll, { passive: true });

    const t0 = performance.now();
    const tick = () => {
      const t = reduce ? 0 : (performance.now() - t0) / 1000;
      core.rotation.set(t * 0.08, t * 0.15, 0);
      inner.rotation.set(0, -t * 0.35, t * 0.2);
      nodes.forEach((n) => { const a = n.a + t * n.s; n.sat.position.set(Math.cos(a) * n.r, Math.sin(a) * n.r, 0); });
      pts.rotation.y = t * 0.01 + sy * 1.5;
      g.rotation.y += (mx * 0.9 + sy * Math.PI * 2 - g.rotation.y) * 0.05;
      g.rotation.x += (my * 0.5 - g.rotation.x) * 0.05;
      cam.position.y += (-sy * 3 - cam.position.y) * 0.05;
      cam.lookAt(0, cam.position.y * 0.3, 0);
      R.render(scene, cam);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", size);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", colors);
      mo.disconnect();
      R.dispose();
    };
  }, []);

  return <canvas id="bg" ref={ref} aria-hidden="true" />;
}
