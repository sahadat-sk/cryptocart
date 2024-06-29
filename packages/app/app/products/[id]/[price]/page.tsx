"use client";
import { useBuyProduct } from "@/app/hooks/useEcommerce";

export default function Product({
  params,
}: {
  params: { id: string; price: string };
}) {
  const { buyProduct } = useBuyProduct({ productDetails: params });
  return <button onClick={buyProduct}>buy</button>;
}
