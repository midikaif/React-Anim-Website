import {motion} from "framer-motion";
import {Power4} from "gsap";
import React, {useState} from "react";

function Featured() {
  const [hovering, setHovering] = useState([false,false]);

  return (
    <div className="rounded-tl-3xl rounded-tr-3xl">
      <div className="p-12 pt-30 text-[4vw] leading-none tracking-tight ">
        Featured projects
      </div>
      <div className="border-t-1 border-zinc-400 flex gap-10 p-12">
        <div className="w-1/2">
          <div className="flex items-center uppercase">
            <span className='before:content-["•"] before:mr-2 before:text-zinc-800 before:text-4xl'></span>
            <span className="pt-1">Salience Labs</span>
          </div>
          <div className="relative" onMouseEnter={()=>{setHovering([true,false])}} onMouseLeave={()=> setHovering([false,false])} >
            <div className="h-[80vh] rounded-xl overflow-hidden bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png)]"></div>
            <div className="text-7xl flex absolute overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 left-full leading-none tracking-tighter text-[#cdea68] z-[100]">
              {"FYDE".split("").map((item,i) => (
                <motion.span
                initial={{y:'100%'}}
                animate={hovering[0] ? {y: '0%'} : {y:'100%'}}
                transition={{ease: Power4.easeInOut, delay: i*.1}}
                className="inline-block"
                >
                  {item}</motion.span>)
              )}
            </div>
          </div>
          <div className="pt-4">
            <button className="uppercase border-1 rounded-4xl px-2 py-1 leading-none tracking-tight ">
              brand identity
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center uppercase">
            <span className='before:content-["•"] before:mr-2 before:text-zinc-800 before:text-4xl'></span>
            <span className="pt-1">Medallia Experience</span>
          </div>
          <div className="relative" onMouseEnter={()=> setHovering([false,true])} onMouseLeave={()=> setHovering([false,false])}>
            <div className="h-[80vh] rounded-xl overflow-hidden bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png)]"></div>
            <div className="text-7xl flex overflow-hidden absolute top-1/2 -translate-y-1/2 right-full leading-none tracking-tighter text-[#cdea68] z-[100]">
              {"VISE".split("").map((item,i) => {
                return <motion.span
                  initial={{y: '100%'}}
                  animate={hovering[1] ? {y: '0'} : {y: '100%'}}
                  transition={{ease: Power4.easeInOut, delay: i*.1}}
                  className="inline-block"
                >{item}</motion.span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
