import React from "react";

function Featured() {
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
          <div className="relative">
            <div className="h-[80vh] rounded-xl overflow-hidden bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png)]"></div>
            <div className="text-7xl absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-full leading-none tracking-tighter text-[#cdea68] z-[100]">
              {"FYDE".split("").map((item,i) => {
               return <span key={i}>{item}</span>;
              })}
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
          <div className="relative">
            <div className="h-[80vh] rounded-xl overflow-hidden bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png)]"></div>
            <div className="text-7xl absolute top-1/2 -translate-y-1/2 right-full leading-none tracking-tighter text-[#cdea68] z-[100]">
              {"VISE".split("").map((item) => {
                return <span>{item}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
