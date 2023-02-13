import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import usePlayerControls from "hooks/usePlayerControls";
import { useEffect, useRef } from "react";
import MyPointerLockControls from "./myPointerLockControls";
import { PointerLockControls } from "@react-three/drei";

const SPEED = 6;

export default function Player(props: ThreeElements["mesh"]) {
  const { camera } = useThree();
  const playerDirection = usePlayerControls();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      ref.current ? ref.current.position : new Vector3(0, 0, 0)
    );
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      Number(playerDirection.down) - Number(playerDirection.up)
    );
    const sideVector = new Vector3(
      Number(playerDirection.left) - Number(playerDirection.right),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return (
    <>
      <PointerLockControls />
    </>
  );
}
