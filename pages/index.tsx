import type { NextPage } from "next";
import Head from "next/head";
import StatsCard from "../components/StatsCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stats Preview Card Component</title>
        <meta name="description" content="Stats Preview Card Component" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <StatsCard />
      </main>

      <footer />
    </div>
  );
};

export default Home;
