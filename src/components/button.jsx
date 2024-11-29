export default function Button({disabled,onClick,type,children}){

    //we can simply set the state of button disabled here if disabled is true
    //use clsx or clx for conditional rendering of the classes 
    return <>
        <button disabled={disabled} className='disabled:cursor-not-allowed text-base px-3 py-3 w-full rounded-xl 
        bg-gradient-to-b from-mariner-700 to-mariner-800 text-mariner-50 hover:from-mariner-600 hover:to-mariner-700
        disabled:opacity-50 disabled:hover:from-mariner-700 disabled:hover:to-mariner-800 transition-all' 
         onClick={onClick}>{children}</button>
    </>
}