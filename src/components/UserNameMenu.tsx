import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { CircleUserRoundIcon } from "lucide-react"
import { DropdownMenuContent,  DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const UserNameMenu = () =>{
    const {user,logout} = useAuth0();
  return (


<DropdownMenu>
<DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-4">
<CircleUserRoundIcon className="text-orange-500"/>
{user?.email}
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem className="py-2">

<Link to="/manage-restaurant" className="font-bold hover:text-orange-500">Manage restaurant</Link>

</DropdownMenuItem>

<DropdownMenuItem className="py-2">

<Link to="/user-profile" className="font-bold hover:text-orange-500">User Profile</Link>

</DropdownMenuItem>



<Separator/>
<DropdownMenuItem>

<Button onClick={()=>logout()} className="flex flex-1 font-bold bg-orange-500">LogOut</Button>
</DropdownMenuItem>

</DropdownMenuContent>



</DropdownMenu>




    
  )
}
export default UserNameMenu
