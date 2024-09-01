import { useParams } from "react-router-dom"
import { useGetRestaurant } from "@/api/RestaurantApi";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import RestaurantInfo from "@/components/RestaurantInfo";
import MenuItems from "@/components/MenuItems";
import { useState } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import OrderSummary from "@/components/OrderSummary";
import { MenuItem } from "@/types";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useCreateCheckoutSession } from "@/api/OrderApi";



  
export type CartItem={
_id:string;
name:string;
price:number;
quantity:number;
}


const DetailsPage=()=>{
const {restaurantId}=useParams();
const {restaurant,isLoading}=useGetRestaurant(restaurantId);
const { createCheckoutSession,isLoading:isCheckoutLoading}=useCreateCheckoutSession();

const [cartItems,setCartItems]=useState<CartItem[]>(() => {
    const storedCartitems=sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartitems?JSON.parse(storedCartitems):[];
});
if(!restaurant || isLoading){
    return "Loading..."
}
const addToCart=(menuItem:MenuItem)=>{
    setCartItems((prevItems) => {
        const existingCartItem=prevItems.find((cartItem) => 
            cartItem._id === menuItem._id
  )
let updatedCartItems;
  if(existingCartItem){
    updatedCartItems=prevItems.map((cartitem) => 
    cartitem._id === menuItem._id ? {...cartitem,quantity:cartitem.quantity+1 }: cartitem
)
  }
else{
updatedCartItems=[...prevItems,{
    _id:menuItem._id,
    name:menuItem.name,
    price:menuItem.price,
    quantity:1
}]

}

sessionStorage.setItem(`cartItems-${restaurantId}`,JSON.stringify(updatedCartItems))


return updatedCartItems
    })
}


const removeFromCart=(cartItem:CartItem)=>{
setCartItems((prevItems) =>{
    const updatedCartItems =prevItems.filter((item) =>
        cartItem._id !== item._id
    );
    sessionStorage.setItem(`cartItems-${restaurantId}`,JSON.stringify(updatedCartItems))

    return updatedCartItems;
})

}

const onCheckout=async(UserFormData:UserFormData)=>{
    if(!restaurant){
        return;
    }
console.log(UserFormData);
const checkoutData={
    cartItems:cartItems.map((cartItem) => ({
menuItemId:cartItem._id,
name:cartItem.name,
quantity:cartItem.quantity.toString(),
    })),
    restaurantId:restaurant._id,
    deliveryDetails:{
        name:UserFormData.name,
        addressLine1:UserFormData.addressLine1,
        city:UserFormData.city,
        country:UserFormData.country,
        email:UserFormData.email as string
    }
}
const data = await createCheckoutSession(checkoutData)
window.location.href=data.url;
}
return (
<>
<div className="flex flex-col gap-2">
<AspectRatio ratio={16/5}>
    <img src={restaurant?.imageUrl}/>
</AspectRatio>
<div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
<div className="flex flex-col gap-4">
<RestaurantInfo restaurant={restaurant}/>
<span className="text-2xl font-bold">
Menu
</span>
{restaurant.menuItems.map((menuItem) =>(
<MenuItems menuItem={menuItem} addToCart={() => addToCart(menuItem)}/>
))}
</div>
<Card>
<OrderSummary restaurant={restaurant} cartItems={cartItems} removeFromCart={removeFromCart}/>
<CardFooter>
    <CheckoutButton isLoading={isCheckoutLoading} onCheckout={onCheckout} disabled={cartItems.length === 0}/>
</CardFooter>

</Card>



</div>


</div>


</>

)



}
export default DetailsPage