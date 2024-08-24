import landing from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"
export default function Homepage() {
  const navigate=useNavigate();
const handleSearchSubmit=(searchFormValues:SearchForm)=>{

navigate(`/search/${searchFormValues.searchQuery}`)
}
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white flex flex-col justify-between py-5 items-center gap-5 shadow-md -my-14 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-orange-600">Tuck into a takeaway today</h1>
            <span className="text-xl">Food is just a click away!</span>
<SearchBar placeHolder="search by location" onSubmit={handleSearchSubmit} />

        </div>
        <div className="grid md:grid-cols-2 gap-7">
<img src={landing} className="py-5"/>
<div className="flex flex-col items-center justify-center gap-4 text-center">
    <span className="text-2xl font-bold">Order Take-away even faster!</span>
<span>Download the QuickBites App for faster ordering and personalized recommendations</span>
<img src={appDownload}/>
</div>
        </div>







    </div>
  )
}
