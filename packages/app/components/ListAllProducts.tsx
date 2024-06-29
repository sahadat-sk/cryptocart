"use client";

import { useGetAllProducts } from "@/app/hooks/useEcommerce";
import Link from "next/link";

export const ListAllProducts = () => {
  const { products } = useGetAllProducts() as { products: any[] };
  return (
    <div className="flex gap-4 ">
      {products?.map((product, index: number) => {
        return (
          <Link href={`/products/${product.id}/${product.price}`} key={index}>
            <div className="bg-slate-300 rounded-[25px] p-4">
              <h3>{product.name}</h3>
              <h3>{product.description}</h3>
              <h3>{product.price}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
