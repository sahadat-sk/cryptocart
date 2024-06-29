"use client";

import { useEffect } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import abi from "../abi/ecommerce.json";
import { parseEther } from "viem";

const useAddProduct = ({
  productDetails,
}: {
  productDetails: { name: string; description: string; price: number };
}): {
  address: `0x${string}` | undefined;
  setGreeting: (() => void) | undefined;
  setGreetingLoading: boolean;
  prepareSetGreetingError: boolean;
  setGreetingError: boolean;
} => {
  const { address } = useAccount();

  const {
    data: setGreetingHash,
    writeContract: setGreeting,
    isPending: setGreetingLoading,
    isError: setGreetingError,
  } = useWriteContract();

  const { isSuccess: txSuccess, isLoading: txLoading } =
    useWaitForTransactionReceipt({
      hash: setGreetingHash,
      query: {
        enabled: Boolean(setGreetingHash),
      },
    });

  return {
    address,
    setGreeting: () =>
      setGreeting?.({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi,
        functionName: "addProduct",
        args: [
          productDetails.name,
          productDetails.description,
          productDetails.price,
        ],
      }),
    setGreetingLoading: setGreetingLoading || txLoading,
    prepareSetGreetingError: productDetails === undefined,
    setGreetingError,
  };
};

const useGetAllProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    refetch: refetchGreeting,
  } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi,
    functionName: "getAllProducts",
  });

  return {
    products,
    isError,
    isLoading,
  };
};

const useBuyProduct = ({
  productDetails,
}: {
  productDetails: { id: string; price: string };
}): {
  address: `0x${string}` | undefined;
  buyProduct: (() => void) | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const { address } = useAccount();

  const {
    data: buyProductHash,
    writeContract: buyProduct,
    isPending,
    isError,
  } = useWriteContract();

  const { isSuccess: txSuccess, isLoading: txLoading } =
    useWaitForTransactionReceipt({
      hash: buyProductHash,
      query: {
        enabled: Boolean(buyProductHash),
      },
    });

  return {
    address,
    buyProduct: () =>
      buyProduct?.({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi,
        functionName: "buyProduct",
        args: [productDetails.id],
        value: parseEther(productDetails.price.toString()),
      }),
    isLoading: isPending || txLoading,
    isError,
  };
};

const useGetMyProducts = () => {
  const { address } = useAccount();
  console.log("Address is", address);
  const {
    data: products,
    isLoading,
    isError,
    refetch: refetchGreeting,
  } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi,
    functionName: "getProductsBySeller",
    args: [address],
  });

  return {
    products,
    isError,
    isLoading,
  };
};

export { useAddProduct, useGetAllProducts, useBuyProduct, useGetMyProducts };
