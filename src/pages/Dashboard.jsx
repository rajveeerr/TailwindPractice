import { useState } from "react";
import Button from "../components/button";
import Logo from "../components/logo";
import useMobile, { useMobileOptimized } from "../hooks/useMobileHooks";
import { useEffect } from "react";

// in tailwind dark: automatically applies theme based on the operating system, to manually toggle dark mode, we can simply
// add dark attribute to the html tag using js to trigger the dark/light mode

// we just cant apply transition on an element that goes from visible to invisible, css dont know what to apply the transition on,
// tho we can apply transition on opacity,bg-color etc

//ugly way of creating dark mode would be to create a darkMode state var, and based uponits value give the colour

let MenuItems = [
    { href: "#", icon: "✈️", name: "Home" },
    { href: "#", icon: "🖥️", name: "Profile" },
    { href: "#", icon: "👥", name: "Community" },
    { href: "#", icon: "☗", name: "Components" },
    { href: "#", icon: "📑", name: "Docs" },
  ]  
// i can take one state containing all sidebar data and map that inside from here sidebar component or use map outside the 
// sidebar component

export default function Dashboard(){
    let isMobile=useMobile()
    let [open,setOpen]=useState(!isMobile)
    let toggleTheme=()=>{
        document.querySelector("html").classList.toggle("dark")
    }
    useEffect(()=>{
        setOpen(!isMobile)
    },[isMobile])

    return <div className='bg-gradient-to-b from-black to-[#001831] w-full min-h-screen text-mariner-50 flex flex-col font-inter'>
    <div className="px-6 py-2 h-[4.1rem] w-full bg-[#0a0b10] border-b border-[#f9fafb1a] flex justify-between items-center fixed">
        <Logo size="small"/>
        <div className="w-max flex gap-2 items-center">
            <Button onClick={toggleTheme} type="nav" variant="">Login</Button>
            <Button onClick={toggleTheme} type="nav" >Toggle</Button>
        </div>
    </div>
    <div className='flex flex-col'>
        <div className="w-full min-h-screen flex">
            <div className="transition-all ease-in-out delay-150 duration-200 min-w-14 max-w-72 flex flex-col items-center
             bg-mariner-50 dark:bg-[#0a0b10] border-r border-[#f9fafb1a] pt-20 p-2">
                {/* <div className="w-max"> */}
                    <Button onClick={()=>setOpen(!open)} type="nav" >{open?"Close":"➤"}</Button>
                {/* </div> */}
                <div className="flex flex-col gap-3 mt-8 text-lg">
                   <SidebarItem items={MenuItems} open={open}/>
                </div>
            </div>
            <div className="delay-150 ease-in-out duration-200 flex-1 flex justify-center bg-white dark:bg-[#0a0b1063] pt-40">
                {isMobile&&<h1 className="text-black dark:text-white font-extrabold text-4xl">Why using on Phone</h1>}
            </div>
        </div>
    </div>
    </div>
}
//if a sidebar is active or not, this can be checked by matching itemnname and current pathname
function SidebarItem({open,items}) {
    return <>
        {items.map((item) => <div className={`flex items-center px-4 py-2 rounded-[0.4rem] gap-3 hover:bg-[#2051d926] hover:text-nav-from text-black dark:text-white ${open?'w-56':'w-14'} cursor-pointer text-lg font-medium tracking-tight transition-all duration-300`}>
            <div>{item.icon}</div>
            {open&&<div>{item.name}</div>}
        </div> )}
    </>
}
