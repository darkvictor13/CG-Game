import {
  useFrame,
  ThreeElements,
  useThree,
  RootState,
} from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const BALL_RADIUS = 0.25;

export default function Ball(props: { tableSize: number }) {
  const [position, setPosition] = useState(new THREE.Vector3(0, 0.35, 0));
  const [velocity, setVelocity] = useState(new THREE.Vector3(0.1, 0, 0.1));
  const hitBox = props.tableSize / 2 - BALL_RADIUS;

  useFrame((state, delta) => {
    if (
      (position.x > hitBox && velocity.x > 0) ||
      (position.x < -hitBox && velocity.x < 0)
    ) {
      setVelocity(new THREE.Vector3(-velocity.x, 0, velocity.z));
    }
    if (
      (position.z > hitBox && velocity.z > 0) ||
      (position.z < -hitBox && velocity.z < 0)
    ) {
      setVelocity(new THREE.Vector3(velocity.x, 0, -velocity.z));
    }
    setPosition(
      new THREE.Vector3(
        position.x + velocity.x,
        position.y,
        position.z + velocity.z
      )
    );
  });

  return (
    <mesh position={position}>
      <sphereBufferGeometry args={[BALL_RADIUS, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
