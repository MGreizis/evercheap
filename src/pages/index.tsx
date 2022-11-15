import Footer from "../components/footer";
import Head from "next/head";
import HomeStyle from "../../styles/Home.module.css";

const navigation = [
  { name: "Product", href: "/about" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  return (
    <>
      <Head>
        <title>Evercheap</title>
      </Head>

      <div className="isolate bg-tertiary">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".9"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F05D5E" />
                <stop offset={1} stopColor="#F05D5E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a
                  className="flex items-center text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-tertiary">
                    Evercheap
                  </span>
                </a>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-semibold text-secondary hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold bg-secondary leading-6 text-primary shadow-sm ring-1 ring-secondary hover:ring-secondary hover:bg-tertiary"
                >
                  Log in
                </a>
              </div>
            </nav>
          </div>
        </div>
        <main className={HomeStyle.main}>
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
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".9"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E7ECEF" />
                        <stop offset={1} stopColor="#E7ECEF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
