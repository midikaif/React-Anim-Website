import {motion} from 'framer-motion';
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05" className="text-nowrap w-full rounded-tl-3xl rounded-tr-3xl bg-[#004d43] pt-7 pb-14">
      <div className="flex overflow-hidden font-['Founders_Groutesk_X-Condensed'] font-bold text-white leading-none tracking-tighter border-t-1 border-b-1 border-zinc-500">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[20vw] tracking-tighter leading-none pr-10"
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[20vw] tracking-tighter leading-none pr-10"
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee