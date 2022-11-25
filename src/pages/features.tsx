import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import BackgroundBlobOrange from "../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../components/backgroundBlobWhite";
import Styles from "../../styles/Feature.module.css";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <Head>
        <title>Evercheap</title>
        <meta name="description" content="Testing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="isolate bg-tertiary">
        <BackgroundBlobOrange />

        <Header />

        <main className={Styles.main}>
          <section className="body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
                  Aliquip voluptate ut officia eiusmod proident est labore qui excepteur amet laborum adipisicing fugiat.
                </h1>
                <p className="mb-8 leading-relaxed text-secondary text-lg">
                  Lorem do eu officia in nulla irure mollit nostrud. Ad aute duis labore consequat <a href="#map" className="underline text-primary">occaecat dolore et dolor</a> esse officia non cupidatat consectetur incididunt. Eu eu enim et tempor esse duis eu consectetur.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600/bababa/000000&text=Picture+of+the+marketplace"
                  width={720}
                  height={600}
                />
              </div>
            </div>
          </section>

          <section className="body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600/bababa/000000&text=Picture+of+the+marketplace"
                  width={720}
                  height={600}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
                  Velit nostrud exercitation ipsum laboris id velit sunt eiusmod consequat.
                </h1>
                <p className="mb-8 leading-relaxed text-secondary text-lg">
                  Nostrud nisi enim nisi consequat reprehenderit consectetur magna. Culpa velit do officia cupidatat et commodo sint sit eu adipisicing. Nostrud consequat amet et velit et duis reprehenderit aliqua deserunt minim dolore dolor. Incididunt enim est ad occaecat ex do cillum nostrud qui aliquip.
                </p>
              </div>
            </div>
          </section>
          <section className="text-primary body-font relative" id="map">
            <div className="absolute inset-0 bg-tertiary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318062.62797392294!2d3.5388576073064013!3d51.47900545142927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c459a7b1a4fcc9%3A0x2a44511b76e2a1b7!2sZeeland!5e0!3m2!1sen!2snl!4v1669026824788!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/3 md:w-1/2 bg-tertiary rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-primary text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-secondary">
                  Any feedback or suggestions for the website? Let us know!
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-primary bg-secondary border-0 py-2 px-6 focus:outline-none ring-secondary hover:bg-tertiary hover:ring-secondary rounded text-lg">
                  Button
                </button>
                <p className="text-xs text-secondary mt-3">
                  Irure exercitation qui cillum exercitation irure officia eu
                  tempor nulla officia commodo do do.
                </p>
              </div>
            </div>
          </section>
          <BackgroundBlobWhite />
        </main>
        <Footer />
      </div>
    </>
  );
}
