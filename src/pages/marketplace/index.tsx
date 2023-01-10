import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Marketplace.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";
import Link from "next/link";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../../../utils/database.types";
import Checkbox from "../../components/checkbox";

type Products = Database["public"]["Tables"]["products"]["Row"];
type Product = {
  id: number;
  name: string;
  deal: boolean;
};

export default function Index() {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();
  // checkbox
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)}
  // hook for all products
  const [products, setProducts] = useState<Product[]>([]);

  // fetch for the general products api
  // TODO: refactor this fetch to a separate file
  useEffect(() => {
    fetch("http://localhost:3010/stores/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data);
      });
  }, []);

  type ProductProps = {
    children: React.ReactNode;
  };

  // loops through products array and shows productbox for each product
  // the product box is a classname here
  function ProductBoxes({ children }: ProductProps) {
    return (
      <>
        {
          products.map((product) => (
            <div className={Styles.box} key={product.id}>
              <h1>{product.name}</h1>
              <h1>{product.id}</h1>
            </div>
          )) as JSX.Element[]
        }
      </>
    );
  }

  function DealBoxes({ children }: ProductProps) {
    return (
      <>
        {
          products.map((product) => {
            if (!product.deal) {
              return (
                <div className={Styles.box} key={product.id}>
                  <h1>{product.name}</h1>
                  <h1>{product.id}</h1>
                </div>
              );
            }
          }) as JSX.Element[]
        }
      </>
    );
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
        <div className="bg-tertiary isolate">
          <Header />
          <Checkbox label="My Checkbox" isChecked={isChecked} onChange={handleChange} />
          <main className={Styles.main}>
            <div className={Styles.maingridlayout}>
              <div className={Styles.shoppingcart}>
                <h1 className={Styles.title}>Shopping Cart</h1>
                <Link
                  href="/marketplace/compare"
                  className="
                    justify-self-center self-center py-2.5 mb-4 mt-auto bg-white w-[90%] text-primary text-center text-middle rounded-lg font-semibold shadow-sm hover:ring-secondary hover:text-secondary
                    rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
                >
                  Compare
                </Link>
              </div>
              <div className={Styles.productbox}>
                <div className={Styles.gridlayout}>
                  <ProductBoxes>
                  </ProductBoxes>
                </div>
              </div>
              <div className={Styles.dealsbox}>
                <DealBoxes>
                </DealBoxes>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
