"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Chair() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.14;
    group.current.position.y = -1.05 + Math.sin(state.clock.elapsedTime * .6) * .025;
  });
  return (
    <group ref={group} position={[0, -1.05, 0]}>
      <mesh position={[0, .05, 0]} castShadow>
        <boxGeometry args={[1.55, .32, 1.45]} />
        <meshStandardMaterial color="#080808" roughness={.3} metalness={.2} />
      </mesh>
      <mesh position={[0, .9, .55]} rotation={[-.13, 0, 0]} castShadow>
        <boxGeometry args={[1.52, 1.65, .28]} />
        <meshStandardMaterial color="#0a0a0a" roughness={.28} />
      </mesh>
      {[-.85, .85].map(x => <mesh key={x} position={[x, .55, .05]} castShadow><boxGeometry args={[.16,.16,1.15]} /><meshStandardMaterial color="#c59a31" metalness={.9} roughness={.18} /></mesh>)}
      <mesh position={[0, -.42, 0]}><cylinderGeometry args={[.1,.1,.75,24]} /><meshStandardMaterial color="#c59a31" metalness={1} roughness={.15} /></mesh>
      <mesh position={[0, -.82, 0]}><cylinderGeometry args={[.65,.72,.12,40]} /><meshStandardMaterial color="#16130d" metalness={.9} roughness={.2} /></mesh>
    </group>
  );
}

function Mirror() {
  return (
    <group position={[0, 1.3, -1.55]}>
      <mesh><boxGeometry args={[2.9,3.8,.12]} /><meshStandardMaterial color="#b98b26" emissive="#8d6518" emissiveIntensity={1.2} metalness={.9} roughness={.15} /></mesh>
      <mesh position={[0,0,.08]}><boxGeometry args={[2.55,3.45,.08]} /><meshPhysicalMaterial color="#171717" metalness={.75} roughness={.08} clearcoat={1} /></mesh>
      <pointLight position={[0,0,.55]} color="#efc457" intensity={18} distance={5} />
    </group>
  );
}

function Tools() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={.45} floatIntensity={.35}>
        <group position={[2.15,.9,.25]} rotation={[0,0,.25]}>
          <mesh><cylinderGeometry args={[.22,.31,.78,28]} /><meshStandardMaterial color="#121212" metalness={.7} roughness={.2} /></mesh>
          <mesh position={[0,-.55,0]} rotation={[0,0,-.25]}><cylinderGeometry args={[.07,.1,.58,20]} /><meshStandardMaterial color="#b98b26" metalness={.9} /></mesh>
        </group>
      </Float>
      <Float speed={1.8} rotationIntensity={.8} floatIntensity={.45}>
        <group position={[-2.2,.65,.2]} rotation={[0,0,.55]}>
          {[0,.16].map((y,index) => <mesh key={y} position={[0,y,0]} rotation={[0,0,index ? -.12 : .12]}><boxGeometry args={[1.05,.045,.08]} /><meshStandardMaterial color="#d6bd76" metalness={1} roughness={.1} /></mesh>)}
        </group>
      </Float>
      <group position={[2.15,-1.42,-.15]}>
        {[-.42,0,.42].map((x,index) => <mesh key={x} position={[x,index===1?.18:0,0]}><cylinderGeometry args={[.16,.18,.78,24]} /><meshStandardMaterial color={index===1?"#c59a31":"#111"} metalness={.75} roughness={.2} /></mesh>)}
      </group>
    </>
  );
}

function Scene() {
  useFrame((state) => {
    const x = state.pointer.x * .28;
    const y = state.pointer.y * .16;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, .035);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, .4 + y, .035);
    state.camera.lookAt(0, .15, 0);
  });
  return (
    <>
      <ambientLight intensity={.55} />
      <spotLight position={[4,6,4]} angle={.45} penumbra={1} intensity={35} color="#ffd879" castShadow />
      <pointLight position={[-4,1,2]} intensity={14} color="#c89024" />
      <Mirror /><Chair /><Tools />
      <Sparkles count={70} scale={[6,5,4]} size={2.5} speed={.28} color="#e7ba49" opacity={.65} />
    </>
  );
}

export default function SalonScene() {
  return (
    <Canvas camera={{ position: [0,.4,6.4], fov: 40 }} dpr={[1,1.5]} shadows gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <Scene />
    </Canvas>
  );
}
