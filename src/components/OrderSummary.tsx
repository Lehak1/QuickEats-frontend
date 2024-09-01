import { Trash } from "lucide-react";
import {  CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Restaurant } from "@/types";
import { CartItem } from "@/pages/DetailsPage";
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge";

type Props={
restaurant:Restaurant;
cartItems:CartItem[];
removeFromCart:(cartItem:CartItem) => void;
}


const OrderSummary=({restaurant,cartItems,removeFromCart }:Props)=>{
  
const getTotalCost=()=>{ 
const totalInPence=cartItems.reduce((total,cartItem)=>total+cartItem.price*cartItem.quantity
        ,0
);
const totalWithDelivery=totalInPence+restaurant.deliveryPrice;
return (totalWithDelivery/100).toFixed(2);
}


    return (
        <>
        <CardHeader>
        <CardTitle className="flex justify-between tracking-tight font-bold text-3xl">
    <span>Your Order</span>
    <span>£{getTotalCost()}</span>
    </CardTitle>
        </CardHeader>

    <CardContent className="flex flex-col gap-5">
{cartItems.map((item) => (
      <div className="flex justify-between">
        <span><Badge variant="outline" className="mr-2">{item.quantity}</Badge>{item.name}</span>
        <span className="flex items-center gap-1">
        <Trash className="cursor-pointer" color="red" 
        onClick={() => removeFromCart(item)}
        />
        £{((item.quantity*item.price)/100).toFixed(2)}
        </span>
    </div>
))}
<Separator/>
<div className="flex justify-between">
    <span>Delivery</span>
    <span>£{(restaurant.deliveryPrice/100).toFixed(2)}</span>
</div>
<Separator/>
 


    </CardContent>
    </>
    )
}
export default OrderSummary