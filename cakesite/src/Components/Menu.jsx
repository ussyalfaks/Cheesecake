import React from 'react'
import Cake1 from "../assets/cake1.png"
import Cake2 from "../assets/cake2.png"
import Cake3 from "../assets/cake3.png"
import Stars from "../assets/stars.png"
import Arrow from "../assets/arrow.png"



function Menu() {
  return (
    <>
       <div className="bg-yellow-900 bg-opacity-90 self-stretch flex w-full flex-col items-center mt-28 px-8 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-yellow-50 text-6xl whitespace-nowrap mt-9 max-md:text-4xl">
          Our Menu
        </div>
        <div className="self-stretch flex flex-col items-stretch mx-10  mt-11 mb-2.5 max-md:max-w-full max-md:mt-10">
          <div className="max-md:max-w-full px-auto py-0">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <span className="shadow-xl bg-yellow-50 flex w-full flex-col mx-auto pl-5 pr-9 py-10 rounded-[41px] max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src={Cake3}
                    className="aspect-[1.03] object-contain object-center w-[163px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-neutral-800 text-2xl font-bold self-stretch mt-7">
                    Blueberry Cheesecake
                  </div>
                  <div className="text-neutral-600 text-sm self-stretch mt-2">
                    Blueberry love, cheesecake delight!
                  </div>
                  <span className="self-stretch flex  justify-between mt-6 px-0.5 items-center">
                    <div className="text-stone-600 text-2xl font-bold ">
                      <span className="text-lg ">$</span>
                      <span className="text-xl text-stone-600">19.00</span>
                    </div>
                    <img
                      loading="lazy"
                      src={Stars}
                      className=" object-contain object-center  w-[50px] overflow-hidden shrink-0 max-w-full"
                    />
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <span className="shadow-xl bg-yellow-50 flex w-full flex-col mx-auto pl-5 pr-9 py-10 rounded-[41px] max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src={Cake2}
                    className="aspect-[1.03] object-contain object-center w-[163px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-neutral-800 text-2xl font-bold self-stretch mt-7">
                  Biscoff Cheesecake
                  </div>
                  <div className="text-neutral-600 text-sm self-stretch mt-2">
                  Biscoff adores cheesecake magic
                  </div>
                  <span className="self-stretch flex justify-between mt-6 px-0.5 items-center">
                    <div className="text-stone-600 text-2xl font-bold">
                      <span className="text-lg">$</span>
                      <span className="text-xl text-stone-600">11.00</span>
                    </div>
                    <img
                      loading="lazy"
                      src={Stars}
                      className=" object-contain object-center  w-[50px] overflow-hidden shrink-0 max-w-full"
                    />
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <span className="shadow-xl bg-yellow-50 flex w-full flex-col mx-auto pl-5 pr-9 py-10 rounded-[41px] max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src={Cake1}
                    className="aspect-[1.03] object-contain object-center w-[163px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-neutral-800 text-2xl font-bold self-stretch mt-7">
                  Chocolate Cheesecake
                  </div>
                  <div className="text-neutral-600 text-sm self-stretch mt-2">
                  Cherish Chocolate, relish cheesecake
                  </div>
                  <span className="self-stretch flex justify-between mt-6 px-0.5 items-center">
                    <div className="text-stone-600 text-2xl font-bold ">
                      <span className="text-lg">$</span>
                      <span className="text-xl text-stone-600">11.00</span>
                    </div>
                    <img
                      loading="lazy"
                      src={Stars}
                      className=" object-contain object-center  w-[50px] overflow-hidden shrink-0 max-w-full"
                    />
                  </span>
                </span>
              </div> 
            </div>
          </div>
          <span className="flex items-center justify-around gap-5 mt-14 self-end max-md:mt-10">
            <div className="text-yellow-50 text-2xl font-medium">View More</div>
            <img
              loading="lazy"
              src={Arrow}
              className="aspect-[0.53] object-contain object-center w-[9px] overflow-hidden shrink-0 max-w-full "
            />
          </span>
        </div>
      </div>
    </>
  )
}

export default Menu
