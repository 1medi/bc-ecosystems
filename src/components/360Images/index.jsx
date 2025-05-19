import { Suspense, useRef } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader, BackSide } from "three";
import Test from "../../assets/cma-whistler.jpg";

extend({ OrbitControls });

function Scene() {
  const texture = useLoader(TextureLoader, Test);
  return (
    <mesh>
      <sphereGeometry args={[500, 64, 64]} />
      <meshStandardMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  const controls = useRef();
  useFrame(() => controls.current?.update());
  return (
<orbitControls
  ref={controls}
  args={[camera, gl.domElement]}
  enableZoom={false}
  enablePan={false}
  enableDamping
  dampingFactor={0.05}
  maxPolarAngle={Math.PI} 
  minPolarAngle={0}     
  rotateSpeed={0.3}
/>
  );
}

export default function ViewerWithOverlay() {
  return (
    <div className="w-full aspect-video">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Controls />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
