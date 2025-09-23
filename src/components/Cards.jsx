import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-15 gap-5">
      <div className="card-container w-1/2 h-[55vh]">
        <div className="w-full h-full rounded-xl relative bg-[#004d43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[#cdea68] rounded-full px-3 py-.5 left-7 bottom-7 border-1 tracking-tighter opacity-80">
            &copy;2019-2025
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[55vh] flex gap-5">
        <div className="w-full h-full rounded-xl flex items-center justify-center bg-[#212121] relative">
          <img
            className="w-[8vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute text-white rounded-full text- px-3 py-.5 left-7 bottom-7 border-1 uppercase opacity-80 tracking-tighter">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="w-full h-full rounded-xl bg-[#212121] flex items-center justify-center relative">
          <img
            className="w-[8vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />

          <button className="absolute text-white rounded-full text- px-3 py-.5 left-7 bottom-7 border-1 uppercase opacity-80 tracking-tighter">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards