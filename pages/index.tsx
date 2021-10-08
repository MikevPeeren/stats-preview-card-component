import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stats Preview Card Component</title>
        <meta name="description" content="Stats Preview Card Component" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <div className="h-screen w-screen flex items-center justify-center z-10">
          <></>
        </div>
      </main>

      <footer />
    </div>
  );
};

export default Home;
