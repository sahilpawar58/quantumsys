import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/design.png"

import { Parallax } from "./Parallax";


export function Service(){
    return(
        <>
       <div className="h-96  sm:h-screen w-full bg-slate-100 flex items-end justify-center perspective-1px overflow-hidden " data-scroll>
       <div className="w-1/2 h-full p-16 perspective-1px hidden sm:hidden md:hidden lg:block xl:block 2xl:block" data-scroll>
       <Parallax speed={-3} className="self-start ">
       <img className=" " src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719759572/quantumComputers/service/dzjoyp3xzuizyeuti3dw.png"  />
      </Parallax>
       </div>
       <img className=" absolute opacity-25 object-cover block sm:block md:block lg:hidden xl:hidden 2xl:hidden" src={design}  />
       <div className=" w-full  sm:w-1/2 h-full flex flex-col gap-6 items-center justify-center md:w-1/2  ml-6s">
       <Parallax speed={-1} className="self-start">
        <div className="">
        <p className="sm:text-8xl text-4xl">Design</p>
        <div>
        <p className="sm:text-4xl text-2xl">01. Design</p>
        <p className="sm:text-xl text-xl pr-16">The structure and the prototype are the base from which any project in our studio is built</p>
        </div>
        <div>
        <p className="sm:text-4xl text-2xl">02. UI/UX</p>
        <p className="sm:text-xl text-xl pr-16">It continues the theme of the project concept and create its final appearance, interface and memorable style</p>
        </div>
        </div>
        </Parallax>
       </div>
       
    
       </div>
        </>
    )
}