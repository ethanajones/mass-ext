import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Are we going to have a mass extinction today?</title>
        <meta name="description" content="Checking to see if a mass extinction is currently happening" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#020617] to-[#64748b]">
        <div>
          <h1 className="text-[5rem] hover:text-[#fca5a5] text-[#f1f5f9]">Nope</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
