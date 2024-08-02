import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod"
import { LoadingButton } from "@/components/LoadingButton"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { User } from "@/types"
import { useEffect } from "react"

const formSchema = z.object({
email:z.string().optional(),
name:z.string().min(2,{
    message:"Name is required"
}),
addressLine1:z.string().min(1,"Address is required"),
city:z.string().min(1,"city is required"),
country:z.string().min(1,"Country is required"),
})
export type UserFormData = z.infer<typeof formSchema>;
//based on form schema automatically detect type

type Props ={
  currentUser:User;
  onSave:(userProfileData:UserFormData) => void;
  isLoading: boolean;
}

const UserProfileForm=({onSave,isLoading,currentUser}:Props)=>{
const form=useForm<UserFormData>({
  resolver:zodResolver(formSchema),
  defaultValues:currentUser,
  //when the component loads if we have a current user then we want to assign default values of our form to be whatever the values are in the current user object     
});

useEffect(()=>{
  form.reset(currentUser);

},[currentUser,form])



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-4 bg-gray-50 rounded-lg md:p-10">
        <div>
        <h1 className="font-bold">User Profile Form</h1>
<FormDescription>View and change your profile information here</FormDescription>        
        </div>
        
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem >
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} disabled className="bg-white" />
              </FormControl>
              </FormItem>
          )}/>

<FormField
          control={form.control}
          name="name"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field}  className="bg-white" />
              </FormControl>
              </FormItem>
          )}/>

          <div className="flex flex-col md:flex-row gap-4">

<FormField control={form.control}
          name="addressLine1"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input placeholder="Address Line 1" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>


<FormField control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>

<FormField control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Country" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}/>

          </div>
{isLoading ? ( <LoadingButton/>):(
        <Button type="submit" className="bg-orange-500">Submit</Button>)}
      </form>
    </Form>
  )
}

export default UserProfileForm;


