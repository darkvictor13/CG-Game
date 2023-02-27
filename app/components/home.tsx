import styles from "../src/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Welcome to the Pong Game Demo</h1>
      <h2>Instructions</h2>
      <p>Use the arrow keys to move the player.</p>
      <Link href="/game" className={styles.playButton}>
        Play Pong
      </Link>
    </div>
  );
}
