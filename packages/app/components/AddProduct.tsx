"use client";

import { useState, useRef, useEffect } from "react";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { toast } from "react-toastify";
import { useAddProduct, useGetAllProducts } from "@/app/hooks/useEcommerce";

const AddProduct = () => {
  const [newGreeting, setNewGreeting] = useState<string>("");
  const newGreetingInputRef = useRef<HTMLInputElement>(null);

  const onSetGreetingSuccess = () => {
    toast.success(`Successfully set your new greeting`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
      className: "text-sm",
    });
    setNewGreeting("");
    newGreetingInputRef.current?.blur();
  };

  const {
    address,
    setGreeting,
    setGreetingLoading,
    prepareSetGreetingError,
    setGreetingError,
  } = useAddProduct({
    productDetails: { name: "hello", description: "bye", price: 10 },
  });

  const { products, isError } = useGetAllProducts();
  console.log("products is", products, isError);
  useEffect(() => {
    if (!address) {
      setNewGreeting("");
    }
  }, [address]);

  const { openConnectModal } = useConnectModal();

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div className="flex flex-col space-y-4">
          <input
            className="border p-4 text-center"
            onChange={(e) => setNewGreeting(e.target.value)}
            placeholder="Write a new greeting"
            ref={newGreetingInputRef}
            disabled={!address}
            value={newGreeting}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 px-8 rounded-md"
            onClick={setGreeting}
            disabled={
              !address ||
              !newGreeting ||
              setGreetingLoading ||
              prepareSetGreetingError
            }
          >
            {!setGreetingLoading
              ? `Set your new greeting on the blockchain`
              : `Setting greeting...`}
          </button>
          {!address && (
            <button
              className="text-sm text-gray-500 text-center underline hover:opacity-80"
              onClick={openConnectModal}
            >
              Connect your wallet to set a new greeting
            </button>
          )}
          {address && !newGreeting && (
            <p className="text-sm text-gray-500 text-center">
              Type something to set a new greeting
            </p>
          )}
          {setGreetingError && (
            <p className="text-sm text-red-500 text-center">
              There was an error setting your new greeting
            </p>
          )}
          {newGreeting && prepareSetGreetingError && (
            <p className="text-sm text-red-500 text-center">
              Sorry, only the contract owner can set a greeting
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { AddProduct };
