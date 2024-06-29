"use client";
import { useGetMyProducts } from "../hooks/useEcommerce";

export default function ListProductsPage() {
  const { products } = useGetMyProducts();
  console.log(products);
  return <div></div>;
}
