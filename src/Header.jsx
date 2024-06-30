import  Dropdown  from "./Dropdown";
import quantum from "./assets/quantum.svg"


export default function Header(){
    return(
        <>
        <div className="navbar bg-base-100 xl:pl-16 md:pl-2 w-full mt-1 font-sans bg-transparent text-black ">
       <div className="flex w-full justify-around md:justify-evenly">
        <div className="w-1/3 flex items-center">
        <img src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758204/quantumComputers/ugjum2bvl1gwoklldvnu.svg" className="w-40 h-20"></img>
        </div>
        <div className=" w-2/3 gap-2 text-black items-center justify-center xl:flex lg:flex md:flex hidden text-base 2xl:flex lg:font-xs xl:font-semibold z-50 ">
            <Dropdown name="Integration" />
            <Dropdown name="Use Case" />
            <p className="hover:font-bold hover:cursor-pointer mx-4">Pricing</p>
            <Dropdown name="Company" />
        </div>

        <div className=" w-1/3 flex items-center gap-4 justify-center">
            <button className="btn  text-md  w-16">Login</button>
            <button className="btn btn-neutral text-md w-18">Sign Up</button>
        </div>
        </div>
        
        </div>
        </>
    )
}