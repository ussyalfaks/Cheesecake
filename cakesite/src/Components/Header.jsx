import React from 'react'
import Mainr from "../assets/Main.png"

function Header() {
  return (
    <>
      <div className="  flex max-md:flex-col px-10 max-md:px-2 ">
              <span className="self-stretch  flex flex-col w-[50%] max-md:w-[100%] mt-20  items-start max-md:max-w-full max-md:mt-10">
                <div className="text-stone-700 text-5xl leading-[83px] self-stretch max-md:max-w-full max-md:text-4xl ">
                  Bite The World of Cheesecake Wonders
                </div>
                <div className="text-stone-950 text-opacity-80 text-lg leading-7 self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                  We always make our customer happy by providing
                  <br />
                  as many choices as possible
                </div>
                <div className="flex items-center gap-3 mt-11 max-md:mt-10">
                  <button className="text-white cursor-pointer text-base font-semibold leading-5 whitespace-nowrap justify-center  shadow bg-yellow-900  p-5 rounded-[100px] max-md:px-3">
                    Get Started
                  </button>
                  <div className="border shadow flex  basis-[0%] flex-col justify-center items-center p-4 rounded-[100px] border-solid border-yellow-950 max-md:pl-5">
                    <span className="pr-5 flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4817b140a2710e95f61cfe56c41e2147ee0fd3c08a8e1d02a494fddb1311af9?apiKey=1bcc27728ab244268fc16ff60580b199&"
                      className="aspect-square object-contain object-center w-5 fill-stone-600 overflow-hidden shrink-0 max-w-full"
                      alt=""
                    />
                      <button className="text-stone-700 cursor-pointer text-base font-bold leading-2 whitespace-nowrap self-start">
                        Watch Demo
                      </button>
                    </span>
                  </div>
                </div>
              </span>
          <div className="flex  flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[500px] justify-center mt-5 px-16 py-12 items-end max-md:max-w-full max-md:mt-5 max-md:px-5">
              <img
                loading="lazy"
                src={Mainr}
                className="absolute h-full w-full  object-center inset-0"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default Header
