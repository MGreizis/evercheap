import React from "react";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Marketplace.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";
import Link from "next/link";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../../../utils/database.types";

type Products = Database["public"]["Tables"]["products"]["Row"];

export default function Index() {
    const session = useSession();
    const supabase = useSupabaseClient<Database>();

    type ProductProps = {
        children: React.ReactNode;
    }

    function ProductBox({ children }: ProductProps) {
        return (
            <div className={Styles.box}>
                <p className={Styles.text}>Product Name</p>
                <p className={Styles.text}>Product Price</p>
                <p className={Styles.text}>Store</p>
                <p className={Styles.text}>Nutriscore</p>
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
                <div className="bg-tertiary isolate">
                    <Header />
                    <main className={Styles.main}>
                        <div className={Styles.maingridlayout}>
                            <div className={Styles.grocerylist}>
                                <h1 className={Styles.title}>Grocery List</h1>
                                <Link
                                    href="/marketplace/compare"
                                    className={Styles.button}
                                >
                                    Compare
                                </Link>
                            </div>
                            <div className={Styles.productbox}>
                                <div className={Styles.gridlayout}>
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
                                <a href="#">
                                    <svg className="w-12 h-12" color="white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </a>
                                    <ProductBox>
                                    </ProductBox>

                                    <ProductBox>
                                    </ProductBox>

                                    <ProductBox>
                                    </ProductBox>
                                <a href="#">
                                    <svg className="w-12 h-12" color="white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            )}
        </>
    );
}