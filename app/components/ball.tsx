import * as THREE from "three";

export default function Ball(props: {
  position: THREE.Vector3;
  ballRadius: number;
}) {
  return (
    <mesh position={props.position}>
      <sphereBufferGeometry args={[props.ballRadius, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
