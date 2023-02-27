import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import usePlayerControls from "hooks/usePlayerControls";
import { useState } from "react";
import * as THREE from "three";
import Ball from "./ball";
import Table from "./table";

export default function GameLogic(props: {
  tableSize: number;
  tableHeight: number;
  ballRadius: number;
  velocity: number;
}) {
  const { tableSize, tableHeight, ballRadius, velocity } = props;
  const tableHitBox = tableSize / 2 - ballRadius;
  const playerDimensions = new THREE.Vector3(2, 0.5, ballRadius);

  const [ballPosition, setBallPosition] = useState(
    new THREE.Vector3(0, 0.35, 0)
  );
  const [ballVelocity, setBallVelocity] = useState(
    new THREE.Vector3(velocity, 0, velocity)
  );
  const [playerPosition, setPlayerPosition] = useState(
    new THREE.Vector3(0, 0.35, -tableHitBox)
  );

  const { left, right, up, down } = usePlayerControls();

  useFrame((state, delta) => {
    // move player
    if (left) {
      setPlayerPosition(
        new THREE.Vector3(
          playerPosition.x - velocity,
          playerPosition.y,
          playerPosition.z
        )
      );
    } else if (right) {
      setPlayerPosition(
        new THREE.Vector3(
          playerPosition.x + velocity,
          playerPosition.y,
          playerPosition.z
        )
      );
    } else if (up) {
      setPlayerPosition(
        new THREE.Vector3(
          playerPosition.x,
          playerPosition.y,
          playerPosition.z + velocity
        )
      );
    } else if (down) {
      setPlayerPosition(
        new THREE.Vector3(
          playerPosition.x,
          playerPosition.y,
          playerPosition.z - velocity
        )
      );
    }
    // detect collision with player
    const playerHitBox = new THREE.Box3().setFromCenterAndSize(
      playerPosition,
      playerDimensions
    );
    const ballHitBox = new THREE.Box3().setFromCenterAndSize(
      ballPosition,
      new THREE.Vector3(ballRadius, ballRadius, ballRadius)
    );
    if (playerHitBox.intersectsBox(ballHitBox)) {
      if (
        (ballPosition.z > playerPosition.z && ballVelocity.z < 0) ||
        (ballPosition.z < playerPosition.z && ballVelocity.z > 0)
      ) {
        setBallVelocity(
          new THREE.Vector3(ballVelocity.x, ballVelocity.y, -ballVelocity.z)
        );
      }
    }

    // detect collision with table
    if (
      (ballPosition.x > tableHitBox && ballVelocity.x > 0) ||
      (ballPosition.x < -tableHitBox && ballVelocity.x < 0)
    ) {
      setBallVelocity(new THREE.Vector3(-ballVelocity.x, 0, ballVelocity.z));
    }
    if (
      (ballPosition.z > tableHitBox && ballVelocity.z > 0) ||
      (ballPosition.z < -tableHitBox && ballVelocity.z < 0)
    ) {
      setBallVelocity(new THREE.Vector3(ballVelocity.x, 0, -ballVelocity.z));
    }
    setBallPosition(
      new THREE.Vector3(
        ballPosition.x + ballVelocity.x,
        ballPosition.y,
        ballPosition.z + ballVelocity.z
      )
    );
  });

  return (
    <>
      <OrbitControls />
      <ambientLight color="white" />
      <Ball position={ballPosition} ballRadius={ballRadius} />
      <Table tableSize={tableSize} tableHeight={tableHeight} />
      <mesh position={playerPosition}>
        <boxBufferGeometry
          args={[playerDimensions.x, playerDimensions.y, playerDimensions.z]}
        />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
