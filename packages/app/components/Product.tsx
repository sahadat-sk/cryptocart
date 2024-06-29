import { Card,CardHeader,CardContent,CardTitle,CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link"
import { useBuyProduct } from "@/app/hooks/useEcommerce";

export const Product = ({id,name,description,price}:{id:number,name:string,description:string,price:number})=>{

  const { buyProduct } = useBuyProduct({ productDetails: {id,price} });
    return(

            <Card >
              <CardHeader><CardTitle>{name}</CardTitle></CardHeader>
              
              <CardContent>
            <p>{description}</p>
              </CardContent>

           <CardFooter>
<div className="flex gap-4 items-center">
    <Button onClick={buyProduct}>Buy</Button>
<p className="font-bold text-xl">{price.toString()}Eth</p>
</div>
            </CardFooter>   
            </Card>
    )
}