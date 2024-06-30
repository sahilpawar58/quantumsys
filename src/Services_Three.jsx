import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/backend.jpg"

import { Parallax } from "./Parallax";


export function Service_Three(){
    return(
        <>
       <div className="h-96  sm:h-screen w-full  flex items-end justify-center perspective-1px overflow-hidden " data-scroll>
       <div className="w-1/2 h-full p-16 perspective-1px hidden sm:hidden md:hidden lg:block xl:block 2xl:block" data-scroll>
       <Parallax speed={-2} className="self-start ">
       <img className=" " src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719759573/quantumComputers/service/dfhikcnreapukd49kjma.jpg"  />
      </Parallax>
       </div>
       <img className=" absolute opacity-25 object-cover block sm:block md:block lg:hidden xl:hidden 2xl:hidden" src={design}  />
       <div className=" w-full  sm:w-1/2 h-full flex flex-col gap-6 items-center justify-center md:w-1/2  ml-6s">
       <Parallax speed={-1} className="self-start">
        <div className="">
        <p className="sm:text-8xl text-4xl">Backend</p>
        <div>
        <p className="sm:text-4xl text-2xl">01. Methods and functions</p>
        <p className="sm:text-xl text-xl pr-16">Development of mechanics of receiving and transmitting various types of data, creation of calculations and data storage</p>
        </div>
        <div>
        <p className="sm:text-4xl text-2xl">02. API and infrastructure</p>
        <p className="sm:text-xl text-xl pr-16">Functionality that receives and transmits data from scripts and from the database when interacting with them</p>
        </div>
        </div>
        </Parallax>
       </div>
       
    
       </div>
        </>
    )
}