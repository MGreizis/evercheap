import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BackgroundBlobOrange from "../../components/backgroundBlobOrange";
import Styles from "../../../styles/Marketplace.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";
import Image from "next/image";
import Link from "next/link";
import ProductFilters from "../../components/productFilters";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../../../utils/database.types";
import React from "react";
type Products = Database["public"]["Tables"]["products"]["Row"];

export default function Index() {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();

  type Products = {
    children: React.ReactNode;
  }

  function ProductBox({ children }: Products) {
    return (
      <div className={Styles.box}>
        <p className="text-center text-primary font-semibold">Product Name</p>
        <p className="text-center text-primary font-semibold">Product Price</p>
        <p className="text-center text-primary font-semibold">Store</p>
        <p className="text-center text-primary font-semibold">Nutriscore</p>
        {children}
      </div>
    );
  }

  async function getProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      console.log(error);
    }
    console.log(data);
  }

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
        {/* {getProducts()} */}
          <div className="bg-tertiary isolate">
            {/* <BackgroundBlobOrange /> */}
            <Header />
            <main className={Styles.main}>
            {/* <ProductFilters /> */}
              <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2 h-auto mx-3 pt-8">
                <div className={Styles.shoppingcart}>
                  <h1 className={Styles.title}>Shopping Cart</h1>
                  {/* This can be either a separate page or a modal
                  (for now, it's a different page, obviously) */}
                  <Link
                    href="/marketplace/compare"
                    className="
                    justify-self-center self-center py-2.5 mb-4 mt-auto bg-white w-[90%] text-primary text-center text-middle rounded-lg font-semibold shadow-sm hover:ring-secondary hover:text-secondary"
                  >
                    Compare
                  </Link>
                </div>
                <div className={Styles.productbox}>
                  <div className="h-56 grid grid-cols-3 gap-12 content-start pl-10 pt-7">
                    {/* <ProductFilters /> */}
                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                    <ProductBox>
                    </ProductBox>

                  </div>
                </div>
                <div className={Styles.dealsbox}>
                  <h1 className={Styles.title}>Daily / Personalised Deals</h1>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}