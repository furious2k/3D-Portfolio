import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function AnimatedMesh() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshStandardMaterial color="#1565C0" emissive="#0D47A1" />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0 }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <AnimatedMesh />
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default ThreeScene;
