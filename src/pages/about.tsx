import Head from "next/head";
import Footer from "../components/footer";
import Styles from "../../styles/Home.module.css";
import Header from "../components/header";
import BackgroundBlobOrange from "../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../components/backgroundBlobWhite";

export default function About() {
  return (
    <>
      <Head>
        <title>Evercheap</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-tertiary isolate">
        <BackgroundBlobOrange />

        <Header />

        <main className={Styles.main}>
          <h1 className="font-medium leading-tight text-8xl mt-0 mb-2 text-primary">
            About page
          </h1>
          <p className="text-2xl pb-2 text-secondary">Who are we?</p>
          <p className="text-2xl pt-2 text-secondary">
            Well, we are the Evercheap team
          </p>

          <div className="flex items-center justify-center w-full mt-5 pt-4">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary rounded-md w-11 h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7 text-indigo-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl text-primary">Sed eget viverra ante</h4>
                <p className="mt-1 text-secondary text-lg">
                  Morbi egestas pretium est at consequat, suspendisse a
                  ultricies justo, vel mollis nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-5">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary rounded-md w-11 h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7 text-indigo-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl text-primary">
                  Praesent vitae turpis sem
                </h4>
                <p className="mt-1 text-secondary text-lg">
                  Maecenas tristique, purus et lobortis luctus, leo sapien
                  semper metus, at scelerisque metus nunc vel risus.
                </p>
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
