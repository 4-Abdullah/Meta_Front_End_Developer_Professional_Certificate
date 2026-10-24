"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { orbitSkills } from "@/lib/data";

/**
 * High-DPI text label generator with a pill backdrop and crisp rendering
 */
function createCrispLabel(text: string): THREE.Sprite {
  const dpr = 2; // High-resolution canvas scale
  const width = 280 * dpr;
  const height = 80 * dpr;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);

  // Background Glass Pill
  ctx.fillStyle = "rgba(10, 10, 15, 0.65)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 1.5;

  const radius = 16;
  const px = 10, py = 8, pw = 120, ph = 24; // Base bounds

  ctx.beginPath();
  ctx.roundRect(px, py, pw, ph, radius);
  ctx.fill();
  ctx.stroke();

  // Typography
  ctx.font = "600 13px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
  ctx.shadowBlur = 8;
  ctx.fillText(text, px + pw / 2, py + ph / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });

  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(2.2, 0.63, 1);
  return sprite;
}

export default function Scene() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const root = document.documentElement;

    // Renderer Setup with Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    const pointLight1 = new THREE.PointLight(0x6366f1, 4, 20); // Indigo glow
    const pointLight2 = new THREE.PointLight(0xec4899, 4, 20); // Pink glow
    pointLight1.position.set(3, 3, 3);
    pointLight2.position.set(-3, -3, -3);

    scene.add(ambientLight, pointLight1, pointLight2);

    // --- Inner Core & Geometric Shell ---
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x312e81,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xec4899,
      emissive: 0x831843,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    const coreGeo = new THREE.SphereGeometry(1.9, 32, 24);
    const innerGeo = new THREE.IcosahedronGeometry(1.15, 1);

    const core = new THREE.Mesh(coreGeo, coreMaterial);
    const inner = new THREE.Mesh(innerGeo, innerMaterial);
    mainGroup.add(core, inner);

    // --- Orbits & Skill Satellites ---
    const totalSkills = orbitSkills.length;
    const rings: THREE.Mesh[] = [];

    const nodes = orbitSkills.map((skillName, i) => {
      const radius = 2.8 + (i / Math.max(1, totalSkills - 1)) * 3.4;
      const pivot = new THREE.Group();

      // Tilts each orbit uniquely
      pivot.rotation.set(
        Math.sin(i * 2.4) * 0.95,
        i * (Math.PI / (totalSkills / 2)),
        Math.cos(i * 1.7) * 0.75
      );

      // Ring Mesh
      const ringGeo = new THREE.TorusGeometry(radius, 0.006, 16, 180);
      const ringMat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);

      // Satellite Dot
      const satelliteGroup = new THREE.Group();
      const dotGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const dotMat = new THREE.MeshStandardMaterial({
        roughness: 0.3,
        metalness: 0.8,
        emissiveIntensity: 0.5,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);

      // Label Sprite
      const labelSprite = createCrispLabel(skillName);
      labelSprite.position.set(0, 0.32, 0);

      satelliteGroup.add(dot, labelSprite);
      pivot.add(ring, satelliteGroup);
      mainGroup.add(pivot);

      rings.push(ring);

      return {
        satelliteGroup,
        dot,
        labelSprite,
        radius,
        angle: (i / totalSkills) * Math.PI * 2,
        speed: (0.35 * Math.pow(2.8 / radius, 1.4) + 0.05) * (i % 2 === 0 ? 1 : -1),
      };
    });

    // --- Background Particle Field ---
    const particleCount = 750;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 8 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi) - 5;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(particleGeo, particleMat);
    scene.add(starField);

    // --- Dynamic Color Management ---
    const syncColors = () => {
      const styles = getComputedStyle(root);
      const colorA = new THREE.Color(styles.getPropertyValue("--a").trim() || "#6366f1");
      const colorB = new THREE.Color(styles.getPropertyValue("--b").trim() || "#ec4899");
      const inkColor = new THREE.Color(styles.getPropertyValue("--ink").trim() || "#ffffff");

      coreMaterial.color.copy(colorA);
      coreMaterial.emissive.copy(colorA).multiplyScalar(0.3);

      innerMaterial.color.copy(colorB);
      innerMaterial.emissive.copy(colorB).multiplyScalar(0.4);

      pointLight1.color.copy(colorA);
      pointLight2.color.copy(colorB);

      rings.forEach((ring, idx) => {
        (ring.material as THREE.MeshBasicMaterial).color.copy(idx % 2 === 0 ? colorA : colorB);
      });

      particleMat.color.copy(inkColor);

      nodes.forEach((node) => {
        (node.dot.material as THREE.MeshStandardMaterial).color.copy(colorB);
        (node.dot.material as THREE.MeshStandardMaterial).emissive.copy(colorB);
      });
    };

    syncColors();
    const observer = new MutationObserver(syncColors);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "style"] });

    const mediaQuery = matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", syncColors);

    // --- Responsive Sizing ---
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      mainGroup.position.x = w > 900 ? 2.4 : 0;
      mainGroup.scale.setScalar(w > 900 ? 0.95 : 0.62);
    };
    handleResize();

    // --- Interaction & Scroll Logic ---
    let mouseX = 0;
    let mouseY = 0;
    let scrollProgress = 0;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = window.scrollY / maxScroll;
      canvas.style.opacity = String(Math.max(0.25, 1 - (window.scrollY / window.innerHeight) * 0.75));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- Main Render Loop ---
    let animationFrameId = 0;
    const startTime = performance.now();

    const renderFrame = () => {
      const time = reducedMotion ? 0 : (performance.now() - startTime) / 1000;

      // Core rotations
      core.rotation.set(time * 0.06, time * 0.12, 0);
      inner.rotation.set(0, -time * 0.28, time * 0.15);

      // Satellite Orbits
      nodes.forEach((node) => {
        const currentAngle = node.angle + time * node.speed;
        node.satelliteGroup.position.set(
          Math.cos(currentAngle) * node.radius,
          Math.sin(currentAngle) * node.radius,
          0
        );
      });

      // Background motion
      starField.rotation.y = time * 0.008 + scrollProgress * 1.2;

      // Smooth Mouse & Scroll Damping
      const targetRotY = mouseX * 0.8 + scrollProgress * Math.PI * 2;
      const targetRotX = mouseY * 0.4;
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.04;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.04;

      // Dynamic Camera Parallax
      const targetCamY = -scrollProgress * 2.5;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
      camera.lookAt(0, camera.position.y * 0.2, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    // --- Clean Up ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", syncColors);
      observer.disconnect();

      // Dispose Geometries and Materials safely
      coreGeo.dispose();
      innerGeo.dispose();
      coreMaterial.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      rings.forEach((ring) => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, []);

  return <canvas id="bg" ref={ref} className="fixed inset-0 pointer-events-none" aria-hidden="true" />;
}