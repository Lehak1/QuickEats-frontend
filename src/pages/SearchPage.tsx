import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchBar from "@/components/SearchBar";
import { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import {useParams } from "react-router-dom";
import PaginationSelector from "@/components/PaginationSelector";
import CuisineFilter from "@/components/CuisineFilter";
import SortOptionDropdown from "@/components/SortOptionDropdown";
// import { set } from "react-hook-form";

export type SearchState={
    searchQuery:string;
    page:number;
    selectedCuisines:string[];
    sortOption:string;
}

const SearchPage=()=>{
const {city}=useParams();
const [searchState,setSearchState]=useState<SearchState>({
    searchQuery:"",
    page:1,
    selectedCuisines:[],
    sortOption:"bestMatch",
})

const[isExpanded,setIsExpanded]=useState<boolean>(false);

const{data,isLoading} =useSearchRestaurants(searchState,city);
// const handleSubmit=()=>{
// }
if(isLoading){
    <span>Loading ...</span>
}
if(!data?.data || !city){
    return <span>No results found</span>
}
const setSearchQuery=(searchFormData:SearchForm)=>{
setSearchState((prevState) => ({
    ...prevState,
    searchQuery:searchFormData.searchQuery,
    page:1,
}))

}

const setsortOption=(sortOption:string)=>{
    setSearchState((prevState) =>({
        ...prevState,
        page:1,
        sortOption
    }))
}

const resetSearch=()=>{
    setSearchState((prevState) => ({
        ...prevState,
        searchQuery:"",
        page:1,
    }));
}

const setPage=(page:number)=>{
setSearchState((prevState) => ({
    ...prevState,
    page:page,
}))
}

const setSelectedCuisines=(selectedCuisines:string[])=>{
       setSearchState((prevState) => ({
        ...prevState,
       selectedCuisines,
       page:1
    }))
}




return (
<div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
    <div id="cuisines-List" className="flex flex-col ">
<CuisineFilter isExpanded={isExpanded}  onChange={setSelectedCuisines} onExpandedClick={()=>setIsExpanded((prevIsExpanded) => !prevIsExpanded)} selectedCuisines={searchState.selectedCuisines}/>
    </div>
<div id="main-content" className="flex flex-col gap-5">
  <SearchBar onSubmit={setSearchQuery} placeHolder="Search by cuisine" onReset={resetSearch} searchQuery={searchState.searchQuery}/>
<div className="flex justify-between flex-col gap-3 lg:flex-row">
<SearchResultInfo total={data.pagination.total} city={city}/>
<SortOptionDropdown sortOption={searchState.sortOption} onChange={(value) =>setsortOption(value)}/>
</div>
{data.data.map((restaurant) =>(
<SearchResultCard restaurant={restaurant}/>
))}
<PaginationSelector page={data.pagination.page} pages={data.pagination.pages} onPageChange={setPage}/>
  </div>

    </div>
)
}
export default SearchPage;