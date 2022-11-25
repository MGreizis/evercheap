import Footer from "../components/footer";
import Head from "next/head";
import Styles from "../../styles/Home.module.css";
import Header from "../components/header";
import BackgroundBlobOrange from "../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../components/backgroundBlobWhite";

export default function Index() {
  return (
    <>
      <Head>
        <title>Evercheap</title>
      </Head>

      <div className="isolate bg-tertiary">
        <BackgroundBlobOrange />

        <Header />

        <main className={Styles.main}>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-16 pb-32 sm:pt-24 sm:pb-40">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-primary">
                    Always find the cheapest option
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-secondary sm:text-center">
                    Start saving money just by creating a shopping cart.
                    Evercheap will help you find the best deals on the groceries
                    you want.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-secondary px-4 py-1.5 text-base font-semibold leading-7 text-primary shadow-sm ring-1 ring-secondary hover:bg-tertiary hover:ring-secondary"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BackgroundBlobWhite />
        </main>
        <Footer />
      </div>
    </>
  );
}
