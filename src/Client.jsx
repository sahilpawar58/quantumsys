import { FaQuoteLeft } from "react-icons/fa";
import shawn from "./assets/services/shawn.jpg"
import arizona from "./assets/services/Arizona.png"
export function Client() {
return(<>
<div className="h-screen w-full bg-slate-100 flex flex-col justify-center perspective-1px overflow-hidden" data-scroll>
    <div className="h-full lg:h-[35rem] md:h-[30rem] sm:h-[27rem] w-full  flex items-center justify-center">
        <div className="h-5/6 w- xl:w-2/3 md:h-3/4 lg:w-full m-10  bg-gradient-to-r from-[#9f78fb] rounded-xl overflow-hidden flex flex-col sm:flex-row">
            <div className="h-full w-full sm:w-3/4   lg:pb-4">
            <FaQuoteLeft className="h-12 w-12 xl:h-16 xl:w-16 lg:h-16 lg:w-16 md:w-12 md:h-12  pl-4"/>
            
            <p className="lg:text-xl xl:text-xl mx-8 mt-2 ml-12 md:text-lg">
            I have partnered with Quantum for dozens of projects and every single one of them has been successful! Natish is a professional and always delivers beautiful designs whether it's wireframes or live pages built by his agency. I would highly recommend Quantum to anyone looking for a design partner they can trust.
            </p>
            <br className="hidden xl:block lg:block md:hidden sm:hidden"/>
            <p className="block xl:block lg:block md:hidden sm:hidden lg:text-xl xl:text-xl mx-8 mt-2 ml-12 md:text-lg">
            Scaling from one country to another was reduced to button clicks. Their solution was fairly straightforward to integrate, and the team was very responsive.
            </p>
            </div>
            <div className="hidden h-full w-1/4  relative sm:flex flex-col items-center">
                <div className=" flex flex-col items-center ">
                <img className="xl:w-[12rem] lg:w-[12rem] md:w-[9rem] rounded-lg mt-2" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719759573/quantumComputers/service/uw4wabanwyhphtg2l1ii.jpg"></img>
                <p className="font-semibold text-lg">SShawn Massie</p>
                <p className="text-base">Chief growth officer</p>
                </div>
                <img className="w-[8rem] rounded-lg absolute bottom-0 " src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719759571/quantumComputers/service/dntgqzrtjwlbdeqwhcwd.png"></img>
            </div>
            <div className="flex m-4 justify-end sm:hidden font-semibold"><p>- Shawn Massie</p></div>
        </div>

        
    </div>
    
</div>
</>)
}