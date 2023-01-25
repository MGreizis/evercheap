/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Marketplace.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";
import Link from "next/link";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../../../utils/database.types";
import debounce from "lodash.debounce";

type Products = Database["public"]["Tables"]["products"]["Row"];
type Product = {
  id: number;
  name: string;
  deal: boolean;
  imageurl: string;
};

const SHAPPING_CAR_KEY = "SHAPPING_CAR_KEY";
export default function Index() {
  const session = useSession();

  const supabase = useSupabaseClient<Database>();
  // hook for all products
  const [products, setProducts] = useState<Product[]>([]);

  const [shoppingCar, setShoppingCar] = useState<Product[]>([]);
  const router = useRouter();

  // fetch for the general products api
  // TODO: refactor this fetch to a separate file
  useEffect(() => {
    fetch("http://localhost:3010/stores/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data);
      });
    // setShoppingCar(
    //   JSON.parse(window.localStorage.getItem(SHAPPING_CAR_KEY)) || []
    // );
  }, []);

  type ProductProps = {
    searchTerm: string;
    children: React.ReactNode;
  };

  const addShoppingCar = (product: Product) => {
    if (!shoppingCar.find((item) => item.id === product.id)) {
      setShoppingCar([...shoppingCar, product]);
    } else {
      window.alert("Exists");
    }
  };
  const toCompareHandler = () => {
    const addLocaShoppingCar = (newCarData: Product[]) => {
      window.localStorage.setItem(
        "SHAPPING_CAR_KEY",
        JSON.stringify(Object.values(newCarData))
      );
    };
    if (shoppingCar.length > 0) {
      addLocaShoppingCar(shoppingCar);
      router.push("/marketplace/compare");
    } else {
      window.alert("Please Select Product!");
    }
  };

  // loops through products array and shows productbox for each product
  // the product box is a classname here
  // !! old comments ^^^

  const createProductBox = (product: Product) => {
    return (
      <div
        className={Styles.box}
        key={product.id}
        onClick={() => {
          addShoppingCar(product);
        }}
      >
        <h1 className="m-1 flex justify-center">{product.name}</h1>
        <img className="h-[80%] w-[85%]" src={product.imageurl} alt="product" />
      </div>
    );
  };

  function ProductBoxes({ searchTerm, children }: ProductProps) {
    const limitedProducts = products.slice(3, 15).filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <>
        {
          limitedProducts.map((product) => (
            <div
              className={Styles.box}
              key={product.id}
              onClick={() => {
                addShoppingCar(product);
              }}
            >
              {/* <h1 className="m-1 flex justify-center">{product.name}</h1>
              <img className="h-[80%] w-[85%]" src={product.imageurl} alt="product"/> */}
              {createProductBox(product)}
            </div>
          )) as JSX.Element[]
        }
      </>
    );
  }

  function DealBoxes({ children }: ProductProps) {
    const limitedProducts = products.slice(0, 3);

    return (
      <>
        {
          limitedProducts.map((product) => {
            if (!product.deal) {
              return (
                <div className={Styles.box}
                key={product.id}
                onClick={() => {
                  addShoppingCar(product);
                }}>
                  <h1 className="flex justify-center m-1">{product.name}</h1>
                  <img className="h-[80%] w-[85%]" src={product.imageurl} alt="product"/>
                </div>
              );
            }
          }) as JSX.Element[]
        }
      </>
    );
  }
  
  const [searchTerm, setSearchTerm] = useState("");  
  
  const SearchForm = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    // debounced function to handle API calls
    const fetchProducts = debounce((term: string) => {
        fetch(`http://localhost:3010/stores/products?search=${term}`)
          .then((res) => res.json())
          .then((result) => {
            setFilteredProducts(result.data);
          });
    }, 500);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const filteredProducts = products.filter(
        (searchedProduct) =>
          searchTerm.length >= 2 &&
          searchedProduct.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    };  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length >= 2) {
            fetchProducts(term);
        }
    }
    
    return (
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 text-center p-4 rounded-md"
        >
          <input
            type="search"
            className="bg-white focus:outline-none focus:shadow-outline-blue border border-secondary rounded-md py-2 px-4 block w-full appearance-none leading-normal"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search products..."
            />
        </form>
      </div>
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
          <main className={Styles.main}>
            <SearchForm />
            <div className={Styles.maingridlayout}>
              <div className={Styles.grocerylist}>
                <h1 className={Styles.title}>Shopping Cart</h1>
                <div className={Styles.shoppingcartbox}>
                  {shoppingCar.map((item) => (
                    <div
                      className={Styles.shoppingcartrows}
                      key={`${item.id}-ddd`}
                    >
                      <div className="border-b-2 border-[#272727] rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
                        <h5 className="flex-1 text-center text-xl">
                          {item.name}
                        </h5>
                        <div className="rounded-full circle">
                          <button
                            className={Styles.deleteitemfromcart}
                            onClick={() => {
                              setShoppingCar(
                                shoppingCar.filter(
                                  (Fitem) => Fitem.id !== item.id
                                )
                              );
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25px"
                              height="25px"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_429_11083)">
                                <path
                                  d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                                  stroke="#272727"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_429_11083">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </div>
                      {/* <p className="text-xl">{item.name}</p> */}
                    </div>
                  ))}
                </div>
                <a
                  className={Styles.button}
                  onClick={() => {
                    toCompareHandler();
                  }}
                >
                  Compare
                </a>
              </div>
              <div className={Styles.productbox}>
                <div className={Styles.gridlayout}>
                  <ProductBoxes searchTerm={searchTerm}>
                    children={undefined}
                  </ProductBoxes>
                </div>
              </div>
              <div className={Styles.dealsbox}>
                <a href="#">
                  <svg
                    className="w-12 h-12"
                    color="white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
                <DealBoxes searchTerm={""}>
                  children={undefined}
                </DealBoxes>
                <a href="#">
                  <svg
                    className="w-12 h-12"
                    color="white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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