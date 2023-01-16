import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import { Database } from "../../../utils/database.types";
import Image from "next/image";

export default function Product() {
  const session = useSession();

  const supabase = useSupabaseClient<Database>();
  // hook for all products
  const [products, setProducts] = useState<Product[]>([]);
  type Product = {
    id: number;
    name: string;
    deal: boolean;
    imageurl: string;
  };

  function ImageFetch() {
    useEffect(() => {
      fetch("http://localhost:3010/stores/products")
        .then((res) => res.json())
        .then((result) => {
          setProducts(result.data);
        });
    }, []);

    return (
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.imageurl} alt="image" width="200" height="200"/>
          </div>
        ))}
      </div>
    );
  }

  return <ImageFetch />;
}
