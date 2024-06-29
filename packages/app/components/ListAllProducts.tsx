"use client";

import { useGetAllProducts } from "@/app/hooks/useEcommerce";

import {Product} from "./Product"

export const ListAllProducts = () => {
  const { products } = useGetAllProducts() as { products: any[] };


  return (
    <div className="grid gap-8 grid-cols-4 ">
      {products?.map((product, index: number) => {
        return (
          
            <Product key={index} {...product}/>
          
        );
      })}
    </div>
  );
};
