import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import useWindowDimensions from "hooks/useWindowDimension";
import Head from "next/head";
import GameLogic from "./gameLogic";

export default function Game() {
  const { width, height } = useWindowDimensions();
  while (!width || !height) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Pong Game</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.webGlDiv}>
          <Canvas
            camera={{
              position: [0, 5, 10],
              aspect: width / height,
              fov: 60,
            }}
          >
            <GameLogic
              tableSize={10}
              tableHeight={0.1}
              ballRadius={0.25}
              velocity={0.1}
            />
          </Canvas>
        </div>
      </main>
    </>
  );
}
