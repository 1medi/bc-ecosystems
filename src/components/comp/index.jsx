import { Suspense, useRef } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from "three";
import Test from "../../assets/cma-whistler.jpg";
import { motion } from "framer-motion";
import { BackSide } from "three";

extend({ OrbitControls });

function Scene() {
  const colorMap = useLoader(TextureLoader, Test);
  return (
    <>
      <ambientLight intensity={2} />
      <mesh>
        <sphereGeometry args={[500, 64, 64]} />
        <meshStandardMaterial map={colorMap} side={BackSide} />
      </mesh>
    </>
  );
}

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

export default function ViewerWithOverlay() {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 0.1], fov: 75 }}
      >
        <Suspense fallback={null}>
          <Controls />
          <Scene />
        </Suspense>
      </Canvas>

    </div>
  );
}
