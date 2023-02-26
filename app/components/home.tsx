import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Pong Game Demo</h1>
      <Link href={"/game"}>Play Pong</Link>
      <p>Use the arrow keys to move the paddle</p>
    </div>
  );
}
