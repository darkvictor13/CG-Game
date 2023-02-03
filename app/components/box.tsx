import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

export default function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [isHovered, setHover] = useState(false);
  const [isClicked, setClick] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={isClicked ? 1.5 : 1}
      onClick={() => setClick(!isClicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={isHovered ? "green" : "yellow"} />
    </mesh>
  );
}
