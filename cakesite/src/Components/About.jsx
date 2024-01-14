import React from 'react'
import About from "../assets/About.png"

function Aboutsec() {
  return (
    <>
     <div className="self-center z-[1] mt-0 w-full max-w-[1180px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={About}
              className="aspect-[0.95] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-[97%] max-md:ml-2">
            <span className="flex flex-col mt-52 max-md:max-w-full max-md:mt-10">
              <div className="text-stone-950 text-6xl self-stretch max-md:max-w-full max-md:text-4xl">
                We Love Cheesecake
              </div>
              <div className="text-stone-950 text-opacity-80 text-2xl self-stretch mt-6 max-md:max-w-full">
                Discover Our Cheesecake Story
              </div>
              <div className="text-black text-opacity-70 text-xl self-stretch mt-8 max-md:max-w-full">
                At Cheesecake Love, quality is our cornerstone. Each cheesecake
                is crafted with the finest ingredients, meticulous attention to
                detail, and a dash of creativity. <br />
                <br />
                We believe in delivering not just desserts but moments of sheer
                indulgence.
              </div>
              <span className="text-white text-base font-semibold leading-5 whitespace-nowrap justify-center items-stretch shadow bg-yellow-900 mt-10 px-11 py-6 rounded-[100px] self-start max-md:px-5">
                Read More
              </span>
            </span>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Aboutsec
