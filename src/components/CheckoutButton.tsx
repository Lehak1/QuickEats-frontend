import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingButton } from "./LoadingButton";
import { Dialog} from "@radix-ui/react-dialog";
import { DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";


type Props={
onCheckout:(UserFormdata:UserFormData)=>void;
disabled:boolean;
isLoading:boolean

}



const CheckoutButton=({onCheckout,disabled,isLoading}:Props)=>{
    const {loginWithRedirect,isLoading:isAuthLoading,isAuthenticated}=useAuth0();
const {pathname} =useLocation();
const {currentUser,isLoading:isGetUserLoading}=useGetMyUser();
const onLogin=async()=>{ 
    await loginWithRedirect({
        appState:{
            returnTo:pathname,
        }
    })
}
   


if(!isAuthenticated){
    return (
        <Button onClick={onLogin} className="bg-orange-500 flex-1 font-bold" > Log in to check out</Button>
    )

}
if(isAuthLoading || !currentUser ||isLoading){
    return <LoadingButton/> 
}


return (
<Dialog>
<DialogTrigger>
 <Button className=" bg-orange-500 flex-1" disabled={disabled}>Go to checkout</Button>   
</DialogTrigger>
<DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
<UserProfileForm isLoading={isGetUserLoading} onSave={onCheckout} currentUser={currentUser} title="Confirm Delivery Details" buttonText="Continue to payment"/>

{/* <DialogTitle>Confirm Delivery Details</DialogTitle> */}
{/* <DialogDescription> */}
{/* View and change your profile information here */}
{/* </DialogDescription> */}


</DialogContent> 
 
</Dialog>

)


}
export default CheckoutButton