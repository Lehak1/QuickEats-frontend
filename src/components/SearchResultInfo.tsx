import { Link } from "react-router-dom"


type Props={
city:string,
    total:number
}


const SearchResultInfo=({total,city}:Props)=>{

    return(
<div className="text-xl font-bold flex flex-col gap-3 justify-between lg:flex-row lg:items-center">
    <div>
<span>
    {total} Restaurants found in {city}
<Link to="/" className="ml-1 font-semibold underline cursor-pointer text-blue-500">Change Location</Link>


</span>

</div>

</div>
    )

}
export default SearchResultInfo