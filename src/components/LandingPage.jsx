import React from "react";
import {FaArrowUpLong} from "react-icons/fa6";


function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstruture mt-32 px-20 ">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker ">
            <div className="w-fit flex items-end ">
              {index === 1 && (
                <div className="mr-[1vw] w-[8vw] h-[5.7vw] relative top-[1vw] rounded-md bg-green-800"></div>
              )}
              <h1 className="uppercase text-[8vw] -mb-[1vw] pt-[2vw] leading-[.85] tracking-tighter font-bold font-['Founders_Grotesk_X-Condensed']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center px-20 py-2 ">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item) => {
          return <div className="tracking-tight leading-none">{item}</div>;
        })}
        <div className="start flex gap-1 items-center">
          <div className="px-4 py-1 border-[1px] border-zinc-800 rounded-full uppercase text-sm">
            Start the project
          </div>
          <div className="p-1.5 rotate-[45deg] border-[1px] border-zinc-800 rounded-full font-light">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
