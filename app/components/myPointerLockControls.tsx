import { extend, ThreeElements, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

extend({ PointerLockControls });
export default function MyPointerLockControls() {
  const { camera, gl } = useThree();
  const controls = useRef();

  /*
  useEffect(() => {
    document.addEventListener("click", () => {
      if (controls.current) {
        controls.current.lock();
      }
    });
  }, []);
  */

  //return <PointerLockControls ref={controls} args={[camera, gl.domElement]} />;
}
