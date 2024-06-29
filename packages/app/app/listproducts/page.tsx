"use client";
import { useGetMyProducts } from "../hooks/useEcommerce";

export default function ListProductsPage() {
  const { products } = useGetMyProducts();
  return <div></div>;
}
