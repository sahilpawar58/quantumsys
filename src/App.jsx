import { useState,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Header from './Header'
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
import { FaArrowRight } from "react-icons/fa";
import spotify from "./assets/company/Spotify.png"
import samsung from "./assets/company/Samsung.png"
import levis from "./assets/company/Levis.png"
import ibm from "./assets/company/ibm.png"
import cocacola from "./assets/company/CocaCola.jpg"
import microsoft from "./assets/company/Microsoft.png"
import amazon from "./assets/company/amazon.png"
import google from "./assets/company/google.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import WindowCard from './WindowCard';
import { Service } from './Services'
import { Service_Two } from './Services_two'
import { ReactLenis, useLenis } from 'lenis/react'

import Hero from './Hero'
import { Service_Three } from './Services_Three'
import { Client } from './Client'
import { Footer } from './Footer'



function App() {
  const [count, setCount] = useState(0);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  gsap.to(".most_middle_second_top",{
    y:-60,
    x:5
  })
  gsap.to(".most_middle_last_top",{
    y:-40,
    x:5
  })
  

  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.most_left_left', 
      { 
        x: 208, 
        duration: 1,
        opacity: 1, 
      }
    );
    tl.to('.most_left_left',
      {
        duration:2,
      }
    );
    tl.to('.most_left_left', 
    { 
      y: 60, 
      duration: 0.5,
      opacity: 1, 
    }
  );
    tl.to('.most_left_top',
      {
        y: 50, 
      duration: 1,
      opacity: 1, 
      }
    )
    
    tl.to('.most_left_top',
    {
      duration:2,
    }
  );
  tl.to('.most_left_top',
      {
        x: 210, 
      duration: 0.5,
      opacity: 1, 
      }
    )
  });

  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.most_middle_left', 
      { 
        x: -208, 
        duration: 1,
        opacity: 1, 
      }
    );
    tl.to('.most_middle_left',
      {
        duration:2,
      }
    );
    tl.to('.most_middle_left', 
    { 
      y: -75, 
      duration: 0.5,
      opacity: 1, 
    }
  );
    tl.to('.most_middle_top',
      {
        y: -100, 
      duration: 1,
      opacity: 1, 
      }
    )
    tl.to('.most_middle_top',
    {
      duration:2,
    }
  );
  tl.to('.most_middle_top',
  {
    x: -210, 
  duration: 0.5,
  opacity: 1, 
  }
)
  });
  
  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.most_middle_second_left',
      {
        y: 60, 
      duration: 1,
      opacity: 1, 
      }
    )
    tl.to('.most_middle_second_left',
    {
      duration:2,
    }
  );
  tl.to('.most_middle_second_left',
  {
    x: 210, 
  duration: 0.5,
  opacity: 1, 
  })

  tl.to('.most_middle_second_top', 
      { 
        x: 208, 
        duration: 1,
        opacity: 1, 
      }
    );
    tl.to('.most_middle_second_top',
      {
        duration:2,
      }
    );
    tl.to('.most_middle_second_top', 
    { 
      y: -100, 
      duration: 0.5,
      opacity: 1, 
    }
  );
  });

  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.most_middle_last_left',
      {
        y: -60, 
      duration: 1,
      opacity: 1, 
      }
    )
    tl.to('.most_middle_last_left',
    {
      duration:2,
    }
  );
  tl.to('.most_middle_last_left',
  {
    x: 210, 
  duration: 0.5,
  opacity: 1, 
  })

  tl.to('.most_middle_last_top', 
      { 
        x: -208, 
        duration: 1,
        opacity: 1, 
      }
    );
    tl.to('.most_middle_last_top',
      {
        duration:2,
      }
    );
    tl.to('.most_middle_last_top', 
    { 
      y: 75, 
      duration: 0.5,
      opacity: 1, 
    }
  );
  });
  
  return (
    <>
    <ReactLenis root>
    <div  className='overflow-hidden'>
    <div className='w-full h-full ' > 
    <MeshGradientRenderer
     className="gradient w-full h-full top-0 clip-your-needful-style gradient-background"
     speed="0.01"
     colors={[
         "#BEADFA", 
         "#D0BFFF", 
         "#DFCCFB", 
         "#DFCCFB", 
         "#FFF8C9"
     ]}
 >
    <Header >

    </Header>

    
    <Hero />
    
    </MeshGradientRenderer>
    </div>
    <div className='w-full f-60  flex flex-col items-center justify-center sm:gap-2 '  >
      <h2 className='font-semibold text-2xl'>Our Clients</h2>
     <div className='flex mb-8'>
      <div className=' w-60 h-24 items-center justify-center hidden md:hidden sm:hidden lg:flex xl:flex 2xl:flex '>
      <div className='w-52 h-14 relative overflow-hidden'>
      <img className="most_left_left right-52 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719759015/quantumComputers/company/hygzgaqraksnrjl0mpjq.png"/>
      <img className="most_left_top bottom-24 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758999/quantumComputers/company/zrngamdhepnxnoplpq4l.png"/>
      </div>
      </div>

      <div className=' w-60 h-24 items-center justify-center hidden sm:block md:flex lg:flex xl:flex 2xl:flex'>
      <div className='w-52 h-14 relative overflow-hidden'>
      <img className="most_middle_left left-52 w-52 h-14 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758968/quantumComputers/company/kxxfdscfk90bwejufhu9.png"/>
      <img className="most_middle_top top-12 w-52 h-14 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758967/quantumComputers/company/mct8vthqqsinhh0imxw2.png"/>
      </div>
      </div>

      <div className='sm:w-60 xl:w-60 w-40 h-24 flex items-center justify-center  '>
      <div className='w-52 h-14 relative  overflow-hidden'>
      <img className="most_middle_second_left bottom-16 w-32 sm:w-52 h-14 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758968/quantumComputers/company/byl67xre5zgrlwfmasxv.jpg"/>
      <img className="most_middle_second_top right-52 w-52 h-16 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758983/quantumComputers/company/ujej3ghqxxutzjdge3bb.png"/>
      </div>
      </div>

      <div className='sm:w-60 w-40 h-24 flex items-center justify-center '>
      <div className='sm:w-52 w-32 h-14 relative  overflow-hidden'>
      <img className="most_middle_last_left top-16 w-32 sm:w-52 h-14 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758968/quantumComputers/company/ennabtwib2eb9y2xlivb.png"/>
      <img className="most_middle_last_top left-52  w-32 h-8 object-contain relative" src="http://res.cloudinary.com/dubr8odt7/image/upload/v1719758968/quantumComputers/company/dca0nkbzipvx35q2hf2g.png"/>
      </div>
      </div>
      
     </div>
      
    </div>
    
    
   
    
    <Service />
    <Service_Two />
    <Service_Three />
    <Client />
    <Footer />
    </div>
    </ReactLenis>
    </>
  )
}

export default App
