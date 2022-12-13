import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Home.module.css";

export default function Compare() {
  return (
    <>
      <Head>
        <title>Evercheap</title>
        <meta name="description" content="Evercheap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-tertiary isolate">
        <Header />
        <main className={Styles.main}>
          <h1 className={Styles.title}>Compare</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}
