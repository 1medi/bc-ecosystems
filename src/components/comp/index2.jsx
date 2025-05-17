import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Test from "../../assets/cma-whistler.jpg";
// EXTEND OrbitControls into JSX
extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  useFrame(() => controlsRef.current?.update());
  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={false}
      enablePan={false}
      enableDamping
      dampingFactor={0.1}
      autoRotate={false}
      rotateSpeed={-0.3}
    />
  );
}

function Dome() {
  const texture = useLoader(
    THREE.TextureLoader,
    Test
  );

  return (
    <mesh>
      <sphereGeometry args={[500, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function SphereViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
      <Suspense fallback={null}>
        <Controls />
        <Dome />
      </Suspense>
    </Canvas>
  );
}