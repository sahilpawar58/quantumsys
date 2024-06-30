import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/frontend.jpg"

import { Parallax } from "./Parallax";


export function Service_Two(){
    return(
        <>
       <div className="h-96  sm:h-screen w-full bg-[#FAF7F0] flex items-end justify-center perspective-1px overflow-hidden " data-scroll>
       <div className="w-1/2 h-full p-16 perspective-1px hidden sm:hidden md:hidden lg:block xl:block 2xl:block" data-scroll>
       <Parallax speed={-2} className="self-start ">
       <img className=" " src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719759572/quantumComputers/service/z7xi625sagbmng3pwhlo.jpg"  />
      </Parallax>
       </div>
       <img className=" absolute opacity-25 object-cover block sm:block md:block lg:hidden xl:hidden 2xl:hidden" src={design}  />
       <div className=" w-full  sm:w-1/2 h-full flex flex-col gap-6 items-center justify-center md:w-1/2  ml-6s">
       <Parallax speed={-1} className="self-start">
        <div className="">
        <p className="sm:text-8xl text-4xl">Frontend</p>
        <div>
        <p className="sm:text-4xl text-2xl">01. Layout</p>
        <p className="sm:text-xl text-xl pr-16">Creating static pages, thought out in the project and visualized on the design</p>
        </div>
        <div>
        <p className="sm:text-4xl text-2xl">02. Frontend</p>
        <p className="sm:text-xl text-xl pr-16">Connecting the necessary functionality to interact with the technical part of the project</p>
        </div>
        </div>
        </Parallax>
       </div>
       
    
       </div>
        </>
    )
}