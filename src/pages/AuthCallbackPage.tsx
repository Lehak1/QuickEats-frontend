import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";




const AuthCallbackPage = () =>{
    const navigate =useNavigate();
const {user} =useAuth0(); //current user 
const {createUser} =useCreateMyUser();
const hasCreatedUser=useRef(false);

useEffect(() =>{
if(user?.sub && user?.email && !hasCreatedUser.current){
    createUser({auth0Id:user.sub,email:user.email});
hasCreatedUser.current=true;

}
navigate("/"); 
},[createUser,navigate,user]);
return <>Loading...</>
};


export default AuthCallbackPage;  


//The useRef hook is used to ensure that the createUser function is only called once, even if the useEffect is triggered multiple times due to re-renders. 
//whenever the state changes useref does not trigger the component to re render