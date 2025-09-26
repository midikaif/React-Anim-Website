import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed='-.09' className="bg-[#cdea68] w-full rounded-tl-3xl rounded-tr-3xl ">
      <div className="text-[5vw] px-10 py-20 leading-none tracking-tighter">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </div>
      <div className="border-t-[1px] px-10 py-16 flex w-full border-[#a3ba50]">
        <div className="w-1/2">
          <div className="text-[4vw] mb-2">How we can help:</div>
          <button className="bg-black px-7 py-4 text-white rounded-full flex items-center gap-8 uppercase">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[80vh] rounded-3xl bg-[#a5be49]">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default About