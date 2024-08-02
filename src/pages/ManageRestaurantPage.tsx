import { useCreateMyRestaurant, useGetMyRestaurant, useupdateMyRestaurant } from "@/api/MyRestaurantApi";

import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage=()=>{
const {createRestaurant,isLoading:isCreateLoading}=useCreateMyRestaurant();
const {getRestaurant,isLoading:isUpdateLoading}=useGetMyRestaurant();
const {updateRestaurant}=useupdateMyRestaurant();

const isEditing=!!getRestaurant


return <ManageRestaurantForm restaurant={getRestaurant} onSave={isEditing? updateRestaurant:createRestaurant} isLoading={isCreateLoading || isUpdateLoading}/>

}
export default ManageRestaurantPage