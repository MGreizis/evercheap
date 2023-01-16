import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Marketplace.module.css";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "../login";
import Link from "next/link";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../../../utils/database.types";

type Products = Database["public"]["Tables"]["products"]["Row"];
type Product = {
  id: number;
  name: string;
  deal: boolean;
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
      setShoppingCar(JSON.parse(window.localStorage.getItem(SHAPPING_CAR_KEY))||[])
  }, []);

  type ProductProps = {
    children: React.ReactNode;
  };
  const addShoppingCar = (product:Product)=>{
    if(!shoppingCar.find((item)=>item.id === product.id)){
      setShoppingCar([...shoppingCar,product]);
    }else{
      window.alert("Exists");
    }
  }
  const toCompareHandler = ()=>{
    const addLocaShoppingCar = (newCarData:Product[])=>{
      window.localStorage.setItem("SHAPPING_CAR_KEY",JSON.stringify(Object.values(newCarData)));
    }
    if(shoppingCar.length>0){
      addLocaShoppingCar(shoppingCar);
      router.push("/marketplace/compare");
    }else{
      window.alert("Please Select Product!");
    }
  }
  // loops through products array and shows productbox for each product
  // the product box is a classname here
  function ProductBoxes({ children }: ProductProps) {
    return (
      <>
        {
          products.map((product) => (
            <div className={Styles.box} key={product.id} onClick={()=>{addShoppingCar(product)}}>
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

  const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3010/stores/products")
        .then((res) => res.json())
        .then((result) => {
          setProducts(result.data);
        });
    }, []);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };
  
    const filteredProducts = products.filter(product => 
      searchTerm.length >= 2 && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
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
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
          />
          {/* <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md ml-auto">
            Search
          </button> */}
          <ul>
            {filteredProducts.length !== 0 || searchTerm.length < 2 ? (
              filteredProducts.map((result) => (
                <Link href={`/products/${result.id}`} key={result.id}>
                  <li
                    className="search-result"
                    onMouseEnter={() => {
                      document
                        .querySelector(`.search-result[data-id="${result.id}"]`)
                        ?.classList.add("hovered");
                    }}
                    onMouseLeave={() => {
                      document
                        .querySelector(`.search-result[data-id="${result.id}"]`)
                        ?.classList.remove("hovered");
                    }}
                    data-id={result.id}
                  >
                    {result.name}
                  </li>
                </Link>
              ))
            ) : (
              <li>Enter 2 or more characters to see results</li>
            )}
          </ul>
        </form>
      </div>
    );
  };


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
              <div className={Styles.shoppingcart}>
                <h1 className={Styles.title}>Shopping Cart</h1>
                <div className={Styles.shoppingcartbox}>
                  {shoppingCar.map((item) => (<div className={Styles.shoppingcartrows}  key={`${item.id}-ddd`}><p>{item.name}</p><button onClick={()=>{setShoppingCar(shoppingCar.filter((Fitem)=>Fitem.id !== item.id))}}>Delete</button></div>))}
                </div>
                {/* <Link
                  href="/marketplace/compare"
                  className="
                    justify-self-center self-center py-2.5 mb-4 mt-auto bg-white w-[90%] text-primary text-center text-middle rounded-lg font-semibold shadow-sm hover:ring-secondary hover:text-secondary
                    rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
                >
                  Compare
                </Link> */}
                <div className="justify-self-center self-center py-2.5 mb-4 mt-auto bg-white w-[90%] text-primary text-center text-middle rounded-lg font-semibold shadow-sm hover:ring-secondary hover:text-secondary
                    rounded-full px-4 py-2 focus:outline-none focus:shadow-outline" onClick={()=>{toCompareHandler()}}>
                      Compare
                    </div>
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
