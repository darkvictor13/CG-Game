import { useFrame, ThreeElements } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function Ball(
  props: ThreeElements["mesh"]
  //width: number,
  //height: number
) {
  const ref = useRef<THREE.Mesh>(null!);
  const [direction, setDirection] = useState<THREE.Vector3>(
    new THREE.Vector3(1, 0, 0)
  );
  useFrame((state, delta) => (ref.current.position.x += direction.x * delta));

  return (
    <mesh {...props} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
}
