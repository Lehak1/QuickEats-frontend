import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";
import {SearchState} from "../pages/SearchPage"
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL

export const useSearchRestaurants=(
    searchState:SearchState,
    city?:string
)=>{
const createSearchRequest=async():Promise<RestaurantSearchResponse> =>{
const params=new URLSearchParams();
params.set("searchQuery",searchState.searchQuery);
params.set("selectedCuisines",searchState.selectedCuisines.join(","));
params.set("sortOption",searchState.sortOption);
params.set("page",searchState.page.toString());

const response=await fetch(`${API_BASE_URL}/api/getrestaurants/search/${city}?${params.toString()}`);

if(!response.ok){
    throw new Error("Failed to get restaurant")
}
return response.json();
}
const {data,isLoading}=useQuery(["searchRestaurants",searchState],createSearchRequest,{
     enabled: !!city
})
return {
    data,isLoading
}

}

export const useGetRestaurant=(restaurantId?:string)=>{
const getRestaurantByIdRequest=async():Promise<Restaurant>=>{
    const response =await fetch(`${API_BASE_URL}/api/getrestaurants/${restaurantId}`);

    if(!response.ok){
        throw new Error("Failed to get restaurant")
    }
    return response.json();
}
const {data:restaurant,isLoading}=useQuery("fetchRestaurant",getRestaurantByIdRequest,
    {
        enabled:!!restaurantId,
    }
)
return {restaurant,isLoading}
}


