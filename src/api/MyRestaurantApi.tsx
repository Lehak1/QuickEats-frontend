import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation,useQuery } from "react-query";
import { toast } from "sonner";


const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;


export const useCreateMyRestaurant=()=>{
const {getAccessTokenSilently}=useAuth0();
const createMyRestaurantRequest=async(restaurantFormData:FormData):Promise<Restaurant>=>{

const accessToken=await getAccessTokenSilently();

    const response=await fetch(`${API_BASE_URL}/restaurant`,{
        method:"POST",
        headers:{
        Authorization :`Bearer ${accessToken}`,
         
    },
    body:restaurantFormData
});
if(!response.ok){
    throw new Error("Failed to create Restaurant");
}
return response.json();
};

const {mutate:createRestaurant,isLoading,isSuccess,error}=useMutation(createMyRestaurantRequest)

if(isSuccess){
    toast.success("Restaurant created!")
}
if(error){
    toast.error("Unable to update restaurant ")
}
return {createRestaurant,isLoading}
};



export const useGetMyRestaurant=()=>{
    const {getAccessTokenSilently}=useAuth0()
const getMyRestaurantRequest=async():Promise<Restaurant>=>{
    const accessToken=await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/restaurant`,{
method:"GET",
headers:{
    Authorization:`Bearer ${accessToken}`
}
    })
if(!response.ok){
    throw new Error ("Failed to create Restaurant");
}
return response.json()
}

const {data:getRestaurant,isLoading}=useQuery("fetchMyRestaurant",getMyRestaurantRequest)

return {getRestaurant,isLoading}
}


export const useupdateMyRestaurant=()=>{
const {getAccessTokenSilently}=useAuth0();
const updateMyRestaurant=async(restaurantFormData:FormData):Promise<Restaurant>=>{
    const accessToken=await getAccessTokenSilently();
const response=await fetch(`${API_BASE_URL}/restaurant`,{
method:"PUT",
headers:{
    Authorization:`Bearer ${accessToken}`
},
body:restaurantFormData,
})
if(!response){
    throw new Error ("failed to update");
}
return response.json();
}


const {mutate:updateRestaurant,isLoading,error,isSuccess}=useMutation(updateMyRestaurant)
if(isSuccess){
    toast.success("Restaurant updated!")
}
if(error){
    toast.error("Unable to update restaurant ")
}


return {updateRestaurant,isLoading};
}
