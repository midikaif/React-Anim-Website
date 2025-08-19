import React from 'react'

function Marquee() {
  return (
    <div className="text-nowrap w-full rounded-tl-3xl rounded-tr-3xl bg-[#004d43] pt-20 pb-4">
      <div className="flex gap-15 overflow-hidden font-['Founders_Groutesk_X-Condensed'] font-bold text-white leading-none tracking-tighter border-t-1 border-b-1 border-zinc-500">
        <h1 className="text-[20vw] tracking-tighter leading-none">We Are Ochi</h1>
        <h1 className="text-[20vw]">We Are Ochi</h1>
      </div>
    </div>
  );
}

export default Marquee