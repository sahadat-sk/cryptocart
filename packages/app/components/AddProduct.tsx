"use client";

import { useState, useRef, useEffect } from "react";
import {Input} from "./ui/input"
import {Label} from "./ui/label"
import {Button} from "./ui/button"
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { toast } from "react-toastify";
import { useAddProduct, useGetAllProducts } from "@/app/hooks/useEcommerce";

const AddProduct = () => {
  const [newGreeting, setNewGreeting] = useState<string>("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

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
    productDetails: newProduct,
  });

  useEffect(() => {
    if (!address) {
      setNewGreeting("");
    }
  }, [address]);

  const { openConnectModal } = useConnectModal();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="max-w-2xl grid gap-4">
<div className="grid gap-2">
            <Label>Name</Label>
            <Input
              name="name"
              onChange={(e) => handleChange(e)}
              value={newProduct.name}
              className="w-full"
            />
</div>

<div className="grid gap-2">
            <Label>Description</Label>
            <Input
              name="description"
              onChange={(e) => handleChange(e)}
              value={newProduct.description}
              className="w-full"
            />
</div>

<div className="grid gap-2">
            <Label>Price</Label>
            <Input
              name="price"
              onChange={(e) => handleChange(e)}
              value={newProduct.price}
              className="w-full"
            />
</div>
          </div>
          <Button
            onClick={setGreeting}
            disabled={!address || setGreetingLoading || prepareSetGreetingError}
          >
            {!setGreetingLoading
              ? `Add Product`
              : `Adding.....`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { AddProduct };
