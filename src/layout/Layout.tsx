import React from "react"
import Header from "@/components/Header";
import hero from "../assets/hero.png"
import Footer from "@/components/Footer";
type props={
    children:React.ReactNode;
    showHero?: boolean;
};
const Layout=({children,showHero = false}:props)=> {
  return (
    <div className="flex flex-col min-h-screen">
<Header/>
{showHero && <img src={hero} className="w-full max-h-[600px] object-cover"/>}

<div className="container mx-auto flex-1 py-10">{children}</div>
<Footer/>
    </div>
  )
}



export default Layout
