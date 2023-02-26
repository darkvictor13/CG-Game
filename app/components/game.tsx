import Ball from "./ball";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import useWindowDimensions from "hooks/useWindowDimension";
import { OrbitControls } from "@react-three/drei";
import Table from "./table";
import Head from "next/head";

const TABLE_SIZE = 15;

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
            camera={{ position: [0, 5, 10], aspect: width / height, fov: 60 }}
          >
            <OrbitControls />
            <ambientLight color="white" />
            <Ball tableSize={TABLE_SIZE} />
            <Table tableSize={TABLE_SIZE} tableHeight={0.1} />
          </Canvas>
        </div>
      </main>
    </>
  );
}
