import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage    
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { useFormContext } from "react-hook-form";

const DetailsSectionForm=()=>{
const {control}=useFormContext();


return (
    <> 
    <div className="flex flex-col gap-4">
<div>
    <h1 className="text-4xl font-bold">Details</h1>
    <FormDescription >
    Enter the details about your restaurant
    </FormDescription>

</div>

<FormField
          control={control}
          name="restaurantName"
          render={({ field }) => (
              <FormItem >
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field}  className="bg-white" />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>


<div className="flex flex-row gap-4">
<FormField
          control={control}
          name="city"
          render={({ field }) => (
              <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="city" {...field}  className="bg-white" />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>

<FormField
          control={control}
          name="country"
          render={({ field }) => (
              <FormItem className="flex-1" >
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="country" {...field}  className="bg-white" />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>
</div>
<FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
              <FormItem className="max-w-[25%]">
              <FormLabel>Delivery Price(£)</FormLabel>
              <FormControl>
                <Input placeholder="1.50" {...field}  className="bg-white" />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>

<FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
              <FormItem className="max-w-[25%]" >
              <FormLabel>Estimated Delivery Time(minutes)</FormLabel>
              <FormControl>
                <Input placeholder="30" {...field}  className="bg-white" />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>
</div>



</>


)





}
export default DetailsSectionForm