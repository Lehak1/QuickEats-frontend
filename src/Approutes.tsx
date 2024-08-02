import {Route, Routes,Navigate} from "react-router-dom"
import Layout from "./layout/Layout"
import Homepage from "./pages/Homepage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoutes from "./auth/ProtectedRoutes"
import ManageRestaurantPage from "./pages/ManageRestaurantPage"



const Approutes = () =>{
return(
<Routes>
<Route path="/" element={<Layout showHero={true}><Homepage/>
</Layout>}/>
<Route element={<ProtectedRoutes/>}>
<Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
    </Route>
<Route path="*" element={<Navigate to="/"/>}/>
<Route path="/auth-callback" element={<AuthCallbackPage/>}/>
<Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage /></Layout>}/>
</Routes>


)

}
export default Approutes 