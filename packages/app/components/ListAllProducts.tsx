"use client";

import { useGetAllProducts } from "@/app/hooks/useEcommerce";

export const ListAllProducts = () => {
  const { products } = useGetAllProducts() as { products: any[] };
  console.log("procuts", products);
  return (
    <div>
      {products?.map((product, index: number) => {
        return (
          <div key={index}>
            <h3>{product.name}</h3>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
          </div>
        );
      })}
    </div>
  );
};
