import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

export default function GameLogic(props: {
  windowWidth: number;
  windowHeight: number;
  tableSize: number;
  tableHeight: number;
}) {
  const [ballPosition, setBallPosition] = useState(
    new THREE.Vector3(0, 0.35, 0)
  );
  const [ballVelocity, setBallVelocity] = useState(
    new THREE.Vector3(0.1, 0, 0.1)
  );
  const halfTableSize = props.tableSize / 2;

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight color="white" />
    </Canvas>
  );
}
