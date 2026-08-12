"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Chair() {
  const group = useRef<THREE.Group>(null);
  const rotation = useRef(.34);
  useFrame((state, delta) => {
    if (!group.current) return;
    rotation.current += delta * 0.1;
    group.current.rotation.y = rotation.current;
    group.current.position.y = -1.05 + Math.sin(state.clock.elapsedTime * .6) * .025;
  });
  return (
    <group ref={group} position={[0, -1.05, 0]} scale={1.02}>
      <RoundedBox args={[1.55, .38, 1.42]} radius={.14} smoothness={5} position={[0, .05, 0]} castShadow>
        <meshStandardMaterial color="#71351d" roughness={.38} metalness={.08} emissive="#2b1007" emissiveIntensity={.28} />
      </RoundedBox>
      <RoundedBox args={[1.34, 1.42, .3]} radius={.2} smoothness={6} position={[0, .87, .54]} rotation={[-.16, 0, 0]} castShadow>
        <meshStandardMaterial color="#824324" roughness={.36} metalness={.06} emissive="#321208" emissiveIntensity={.25} />
      </RoundedBox>
      <RoundedBox args={[.76,.24,.2]} radius={.1} smoothness={5} position={[0,1.65,.58]} castShadow><meshStandardMaterial color="#9a5832" roughness={.34} emissive="#351409" emissiveIntensity={.22} /></RoundedBox>
      {[-.84, .84].map(x => <RoundedBox key={x} args={[.16,.18,1.15]} radius={.06} smoothness={4} position={[x, .54,.02]} castShadow><meshStandardMaterial color="#e2b957" emissive="#6f4810" emissiveIntensity={.35} metalness={.9} roughness={.16} /></RoundedBox>)}
      <mesh position={[0, -.42, 0]}><cylinderGeometry args={[.1,.1,.75,24]} /><meshStandardMaterial color="#c59a31" metalness={1} roughness={.15} /></mesh>
      <mesh position={[0, -.82, 0]}><cylinderGeometry args={[.68,.75,.13,40]} /><meshStandardMaterial color="#d0a13b" emissive="#5b3707" emissiveIntensity={.3} metalness={.92} roughness={.18} /></mesh>
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
      <ambientLight intensity={1.45} color="#ffe6bd" />
      <hemisphereLight color="#ffe4aa" groundColor="#351609" intensity={1.8} />
      <spotLight position={[3.5,5.5,4.5]} angle={.5} penumbra={.8} intensity={58} color="#ffd887" castShadow />
      <spotLight position={[-3,3,2.5]} angle={.62} penumbra={1} intensity={32} color="#ff9f55" />
      <pointLight position={[0,1.6,2.8]} intensity={22} distance={7} color="#fff1d0" />
      <pointLight position={[2.8,.2,-1]} intensity={18} distance={5} color="#d99a2b" />
      <Chair /><Tools />
      <Sparkles count={48} scale={[6,5,4]} size={2.2} speed={.25} color="#f4c75d" opacity={.55} />
    </>
  );
}

export default function SalonScene() {
  return (
    <Canvas camera={{ position: [0,.35,5.75], fov: 38 }} dpr={[1,1.5]} shadows gl={{ antialias: true, alpha: true, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.35 }}>
      <Scene />
    </Canvas>
  );
}
