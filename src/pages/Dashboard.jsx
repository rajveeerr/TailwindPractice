import Button from "../components/button";
import Logo from "../components/logo";

// in tailwind dark: automatically applies theme based on the operating system, to manually toggle dark mode, we can simply
// add dark attribute to the html tag using js to trigger the dark/light mode

// we just cant apply transition on an element that goes from visible to invisible, css dont know what to apply the transition on,
// tho we can apply transition on opacity,bg-color etc

export default function Dashboard(){
    let toggleTheme=()=>{
        document.querySelector("html").classList.toggle("dark")
    }

    return <div className='bg-gradient-to-b from-black to-[#001831] w-full min-h-screen text-mariner-50 flex flex-col font-inter'>
    <div className="px-6 py-2 w-full bg-mariner-900/[.2] border-b border-mariner-800/[.2] flex justify-between">
        <Logo size="small"/>
        <div className="w-max">
        <Button onClick={toggleTheme}>Toggle</Button>
        </div>
    </div>
    <div className='flex flex-col md:items-center md:text-center'>
        <div className="w-full min-h-screen flex">
            <div className="transition-all ease-in-out delay-150 duration-200 w-14 md:flex md:w-72 bg-mariner-50 dark:bg-mariner-700/[.1]"></div>
            <div className="delay-150 ease-in-out duration-200 flex-1 bg-white dark:bg-mariner-200/[.1]"></div>
        </div>
    </div>
    </div>
}
