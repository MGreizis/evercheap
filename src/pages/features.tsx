import PropTypes from "prop-types";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import BackgroundBlobOrange from "../components/backgroundBlobOrange";
import BackgroundBlobWhite from "../components/backgroundBlobWhite";
import Styles from "../../styles/Feature.module.css";

export default function Features(props: { theme: any }) {
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
          <section className="text-primary body-font relative">
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
              <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                  ></textarea>
                </div>
                <button
                  className={`text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
                >
                  Button
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Chicharrones blog helvetica normcore iceland tousled brook
                  viral artisan.
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

Features.defaultProps = {
  theme: "indigo",
};

Features.propTypes = {
  theme: PropTypes.string.isRequired,
};
