import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BackgroundBlobOrange from "../../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../../components/backgroundBlobWhite";
import Styles from "../../../styles/Marketplace.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";
import Image from "next/image";
import Link from "next/link";

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
          <div className="bg-tertiary isolate">
            {/* <BackgroundBlobOrange /> */}
            <Header />
            <main className={Styles.main}>
              <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2 h-auto mx-3 pt-16">
                <div className="box row-span-2 flex flex-col">
                  <h1 className={Styles.title}>Shopping Cart</h1>
                  <Link
                    href="/marketplace/compare"
                    className="justify-self-center self-center py-2.5 mb-4 mt-auto bg-white w-[90%] text-primary text-center text-middle rounded-lg font-semibold shadow-sm ring-1 ring-secondary hover:ring-secondary hover:bg-tertiary"
                  >
                    Compare
                  </Link>
                </div>
                <div className="box row-end-auto col-start-2 col-span-2">
                  <h1 className={Styles.title}>
                    The items will go here in individual boxes
                  </h1>
                </div>
                <div className="box col-start-2 col-span-2 mt-16 pb-4">
                  <h1 className={Styles.title}>Daily / Personalised Deals</h1>
                </div>
              </div>
              {/* <BackgroundBlobWhite /> */}
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
