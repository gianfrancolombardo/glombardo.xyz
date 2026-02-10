import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Create a grid of points
  const { positions, colors } = useMemo(() => {
    const count = 100 * 50; // High density
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    let i = 0;
    for (let x = 0; x < 100; x++) {
      for (let z = 0; z < 50; z++) {
        // Normalize coordinates to center
        const u = (x / 100) * 20 - 10;
        const v = (z / 50) * 10 - 5;

        positions[i] = u;
        positions[i + 1] = 0; // Y will be animated
        positions[i + 2] = v;

        // Brand colors (mix of Indigo and Teal)
        // We'll trust the material vertexColors, but let's init basic data
        const color = new THREE.Color();
        if (Math.random() > 0.8) {
          color.set("#2dd4bf"); // Teal accent
        } else {
          color.set("#6366f1"); // Indigo primary
        }

        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;

        i += 3;
      }
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const { clock } = state;
    const t = clock.getElapsedTime();

    const positions = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;

    let i = 0;
    for (let x = 0; x < 100; x++) {
      for (let z = 0; z < 50; z++) {
        const u = (x / 100) * 20 - 10;
        const v = (z / 50) * 10 - 5;

        // Complex wave function for "Data Topography"
        const y = Math.sin(u * 0.5 + t) * Math.cos(v * 0.5 + t * 0.5) * 0.5 +
          Math.sin(u * 2 + t * 2) * 0.1;

        // Add "Scanline" effect - a wave that passes through
        const scanWave = Math.exp(-Math.pow(v - Math.tan(t * 0.5) * 5, 2)) * 1.5;

        positions.setY(i / 3, y + (Number.isNaN(scanWave) ? 0 : scanWave * 0.5));
        i += 3;
      }
    }

    positions.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.05; // Slowly rotate the whole field
  });

  return (
    <points ref={pointsRef} position={[0, -2, -5]} rotation={[-Math.PI / 4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 bg-brand-900">
      <Canvas camera={{ position: [0, 3, 6], fov: 50 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#0f172a', 2, 12]} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
