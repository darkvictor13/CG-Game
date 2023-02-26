import Head from "next/head";
import Home from "components/home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>CG Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
