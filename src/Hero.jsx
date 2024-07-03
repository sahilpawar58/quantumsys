import { FaArrowRight } from "react-icons/fa";
import phone from './assets/phone.png'
import Galileo from './assets/Galileo.png'
import WindowCard from './WindowCard'
import Galileomb from './assets/mbnew.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from "react";

export default function Hero(){

  useEffect(()=>{
    gsap.to('.hero_left', 
      { 
        y: -30, 
        duration: 0.5,
        opacity: 1, 
      }
    );
    gsap.to('.hero_browser', 
      { 
        y: -30, 
        duration: 0.5,
        opacity: 1, 
        // delay:2,
      }
    );
    gsap.to('.hero_phone', 
      { 
        y: -30, 
        duration: 1,
        opacity: 1, 
        // delay:2,
      }
    );
    
  })
  
  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.hero_phone', 
      { 
        x: -1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        // delay:2,
      }
    );
    tl.to('.hero_phone', 
      { 
        x: 1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        // delay:2,
      }
    );
  });
  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.hero_browser', 
      { 
        x: 1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        delay:1,
      }
    );
    tl.to('.hero_browser', 
      { 
        x: -1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        // delay:2,
      }
    );
  });
 

  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
  
    // Add the first animation to the timeline
    tl.to('.hero_text_first', 
      { 
        y: 5, 
        duration: 1,
        opacity: 1, 
        // delay:2,
        display:"flex",
        // visibility:"hidden"
      }
    );
    tl.to('.hero_text_first', 
      { 
        duration:3
      }
    );
    tl.to('.hero_text_first', 
      { 
        x: 32,
        duration: 0.2,
        opacity: 0, 
        delay:2,
        display:"none",
        visibility:"hidden"
      }
    );
  
    // Add the second animation to the timeline
    tl.to('.hero_text_second', 
      { 
        y: 5, 
        duration: 2,
        opacity: 1, 
        // delay:2,
        display:"flex",
        // visibility:"hidden"
      }
    );
    tl.to('.hero_text_second', 
      { 
        duration:3
      }
    );
    tl.to('.hero_text_second', 
      { 
        x: 32,
        duration: 0.2,
        opacity: 0, 
        delay:2,
        display:"none",
        visibility:"hidden"
      }
    );

    tl.to('.hero_text_third', 
      { 
        y: 5, 
        duration: 2,
        opacity: 1, 
        // delay:2,
        display:"flex",
        // visibility:"hidden"
      }
    );
    tl.to('.hero_text_third', 
      { 
        duration:3
      }
    );
    tl.to('.hero_text_third', 
      { 
        x: 32,
        duration: 0.2,
        opacity: 0, 
        delay:2,
        display:"none",
        visibility:"hidden"
      }
    );
  
    
  
  });
  

 return(
    <>
    <div className='h-[calc(100%-10rem)] w-[calc(100%-4rem)] md:h-full sm:h-96 md:w-full  sm:ml-16 ml-2 flex mt-16 mb-12 md:mb-48 lg:mb-48 xl:mb-48'>
    {/*  */}
     <div className=' hero_left h-1/2  xl:w-2/5  w-full sm:w-3/5 sm:justify-center  flex  flex-col justify-between sm:mt-32 mt-32 gap-5 '>
      <div className="hero_text_first flex  flex-col justify-between gap-5 ">
        <p className='font-extrabold text-5xl bg-clip-text text-inherit text '>
        <p
  className="bg-gradient-to-r inline from-primary to-danger bg-clip-text text-transparent">
  New </p>Generation
Digital Agency.</p>
        <p className='font-medium'>
        Seamlessly connect to vendors and reconcile you transactions.
        </p>
        </div>
      
        <div className="hero_text_second hidden  flex-col justify-between gap-5 ">
        <p className='font-extrabold text-5xl bg-clip-text text-inherit text '>
        
        <p
        className="bg-gradient-to-r inline from-primary to-danger bg-clip-text text-transparent">
        Brand experiences</p>, from Start-ups to Unicorns </p>
        <p className='font-medium'>
        With a focus on agility, trust, and customer centricity.
        </p>
        </div>

        <div className="hero_text_third hidden flex-col justify-between gap-5 ">
        <p className='font-extrabold text-5xl bg-clip-text text-inherit text '>
        <p
        className="bg-gradient-to-r inline from-primary to-danger bg-clip-text text-transparent">
        Ready</p> To Start A Project?</p>
        <p className='font-medium'>
        Relax, we've got this covered. You can focus on [task] and leave the rest to us.
        </p>
        </div>
        <div className=" flex items-center gap-4 ">
            <button className="btn w-32 h-14 text-lg font-bold border-solid border-black p-2 flex items-center justify-center gap-4"><p>Login</p> <FaArrowRight /></button>
            <button className="btn w-48 h-14 btn-neutral text-lg font-bold border-solid border-black p-2 flex items-center justify-center gap-4"><p>Talk to Team</p> <FaArrowRight /></button>
           
      </div>
     </div>
      
     <div className='md:justify-center  hidden h-full md:mt-16 w-3/5  md:h-96  relative mt-4 ml-4 md:flex flex-row'>
     <div className="hidden lg:block hero_browser mockup-browser border bg-base-300 lg:h-[calc(100%+8rem)] lg:w-[calc(100%+8rem)] xl:h-[36rem] xl:w-[44rem] w-[calc(100%-8rem)] xl:mr-40 lg:ml-8  z-10 relative xl:left-28" data-scroll-speed="2">
        <div className="mockup-browser-toolbar">
          <div className="input">https://client.dash</div>
        </div>
         <div className="flex flex-row px-4 h-full w-full ">
         <img className='shadow-xl z-10 rounded-lg w-[calc(100%-2px)] h-[calc(100%-4rem)] rounded-b-[20px] ' src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758201/quantumComputers/lrk1xndpntatg0kmgjll.png"/>
          </div>
     </div>
     
      {/* <div className=' bg-slate-800 hero_phone h-5/6 w-72 relative bg-transparent z-20 ml-4 left-0'> */}
      <img className='h-full md:h-[30rem] bottom-10 xl:h-[32rem] lg:h-[30rem]  lg:-top-10 shadow-xl  rounded-[24px] md:relative lg:absolute object-fill z-10 left-0' src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758634/quantumComputers/v1xw8qyq3uprehfoccym.png"/>
      {/* <p className="absolute left-10">ddd</p> */}
      {/* </div>  */}
     </div>
     
     
    </div>
    </>
 )
}