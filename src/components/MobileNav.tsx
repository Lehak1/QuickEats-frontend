import { CircleUserRoundIcon, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () =>{
const {loginWithRedirect,isAuthenticated,user}=useAuth0();

return(
<Sheet>
<SheetTrigger>
<Menu className="text-orange-500"/>   
</SheetTrigger>
<SheetContent className="space-y-3">
   <SheetTitle>
   {isAuthenticated? <div className="flex flex-row py-4 gap-2 font-bold items-center">
    <CircleUserRoundIcon className="text-orange-500"/>
    {user?.email}
    </div>:
    <span>
        Welcome to QuickEats.com!
    </span>}
    </SheetTitle> 
    <Separator/>
<SheetDescription className="flex flex-col gap-4">
{isAuthenticated? 
<MobileNavLinks/>
:

    <Button className="flex-1 font-bold bg-orange-500" onClick={async()=> await loginWithRedirect()}>Log In</Button>
}

     
</SheetDescription>

</SheetContent>

</Sheet>

)



}
 export default MobileNav;
