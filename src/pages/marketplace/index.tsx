import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BackgroundBlobOrange from "../../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../../components/backgroundBlobWhite";
import Styles from "../../../styles/Home.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";

export default function Index() {
  const session = useSession();
  return (
    <>
      <Head>
        <title>Evercheap</title>
        <meta name="description" content="Evercheap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session ? (
        <Login />
      ) : (
        <>
          <div className=" bg-tertiary isolate">
            {/* <BackgroundBlobOrange /> */}
            <Header />
            <main className={Styles.main}>
              <h1>Marketplace</h1>
              {/* <BackgroundBlobWhite /> */}
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
