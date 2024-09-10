import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useupdateMyRestaurant } from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage=()=>{
const {createRestaurant,isLoading:isCreateLoading}=useCreateMyRestaurant();
const {getRestaurant,isLoading:isUpdateLoading}=useGetMyRestaurant();
const {updateRestaurant}=useupdateMyRestaurant();
const {orders,isLoading}=useGetMyRestaurantOrders()
const isEditing=!!getRestaurant

if (isLoading) {
    return <div>Loading...</div>;
  }
  
return(
    <Tabs defaultValue="orders">
    <TabsList>
      <TabsTrigger value="orders">Orders</TabsTrigger>
      <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
    </TabsList>
    <TabsContent
      value="orders"
      className="space-y-5 bg-gray-50 p-10 rounded-lg"
    >
     
     <h2 className="text-2xl font-bold">
        {orders?.length || 0} active orders
      </h2>
      {(orders && Array.isArray(orders)) ? (
        orders.map((order) => <OrderItemCard  order={order} />)
      ) : (
        <p>No orders available</p>
      )}



    </TabsContent>
    <TabsContent value="manage-restaurant">
    <ManageRestaurantForm restaurant={getRestaurant} onSave={isEditing? updateRestaurant:createRestaurant} isLoading={isCreateLoading || isUpdateLoading}/>
    </TabsContent>
  </Tabs>
) 











}
export default ManageRestaurantPage