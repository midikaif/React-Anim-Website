import React, {useEffect, useState} from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth/2;
            const deltaY = mouseY - window.innerHeight/2;

            const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

    return (
      <div className="w-full h-screen overflow-hidden">
        <div
          data-scroll
          data-scroll-speed='-.9'
          className="relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
            <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
              <div className="w-2/3 h-2/3 flex justify-center items-center rounded-full bg-zinc-800">
                <div
                  className="line w-full"
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
              <div className="w-2/3 h-2/3 flex justify-center items-center rounded-full bg-zinc-800">
                <div
                  className="line w-full"
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Eyes