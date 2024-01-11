import * as React from "react";
import  "./index.css";
import Logo from "./assets/LOGO.png"
import Mainr from "./assets/Main.png"
import About from "./assets/About.png"
import Cake1 from "./assets/cake1.png"
import Cake2 from "./assets/cake2.png"
import Cake3 from "./assets/cake3.png"
import Stars from "./assets/stars.png"
import Blog1 from "./assets/Blog1.png"
import Blog2 from "./assets/Blog2.png"
import Blog3 from "./assets/Blog3.png"
import Arrow from "./assets/arrow.png"


function App() {
  return (
    <>
     <div className=" bg-[url('./assets/MAINBG.png')]">
      {/* NAV SECTION */}
          <div className=" flex flex-row justify-between items-center max-sm:flex-col max-md:max-w-full">
              <img
              src={Logo}
                loading="lazy"
                className="aspect-square object-contain object-center w-[165px] overflow-hidden max-w-full"
              />
            <nav className="bg-yellow-900 bg-opacity-80 flex max-w-[446px] items-start justify-between gap-5 pr-8 rounded-xl max-sm:mb-4">
              <a href="#" className="text-yellow-900 text-opacity-80 text-center text-base font-bold whitespace-nowrap bg-white self-stretch grow justify-center items-stretch px-7 py-4 rounded-xl" aria-label="Home">Home</a>
              <div className="text-white text-base font-semibold self-center my-auto">About Us</div>
              <div className="text-white text-base font-semibold self-center my-auto">Menu</div>
              <div className="text-white text-base font-semibold self-center grow whitespace-nowrap my-auto">Contact</div>
            </nav>
             <span className=" text-stone-700 text-base font-medium whitespace-nowrap justify-center items-stretch mr-36 px-6 py-4 rounded-[38px] border-2 border-solid border-stone-700 max-md:mr-2.5 max-md:mb-10 max-md:px-5">
                Sign up
              </span>
            </div>
            {/* END */}
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
     </div>
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
      <span className="bg-yellow-900 bg-opacity-90 self-stretch flex w-full flex-col items-center mt-28 px-8 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
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
      </span>


{/* Blog */}
      <div className="bg-yellow-50 pb-10">
      <div className="text-yellow-900  text-center text-6xl self-center whitespace-nowrap mt-20 max-md:text-4xl">
        Our Blog
      </div>
      <div className="text-yellow-900 text-center text-2xl leading-6 self-center whitespace-nowrap mt-2">
        Our Recent Posts
      </div>
      <div className="self-center grid  w-full max-w-[1187px] mx-auto mt-20 mb-9 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col  items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <span className="shadow-2xl bg-yellow-50 flex grow flex-col items-stretch w-full px-8 py-7 rounded-2xl max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src={Blog1}
                className="aspect-square object-contain object-center w-full overflow-hidden max-md:mr-1.5"
              />
              <div className="text-amber-700 text-lg font-medium mt-7">
                23 Nov, 2023 / Cheesecake
              </div>
              <div className="text-yellow-900 text-2xl font-semibold mt-4">
                A Peek Behind the Cheesecake Curtain
              </div>
              <div className="text-yellow-900 text-xs mt-6">
                Step into our cheesecake haven, where the magic unfolds behind
                the scenes, whisking dreams into reality. Our kitchen is a
                symphony and very...
              </div>
              <div className="text-yellow-900 text-base font-medium mt-6">
                Read More
              </div>
            </span>
          </div>
            {/* 2 */}
            <div className="flex flex-col  items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <span className="shadow-2xl bg-yellow-50 flex grow flex-col items-stretch w-full px-8 py-7 rounded-2xl max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src={Blog2}
                className="aspect-square object-contain object-center w-full overflow-hidden max-md:mr-1.5"
              />
              <div className="text-amber-700 text-lg font-medium mt-7">
              18 July, 2023 / Cheesecake
              </div>
              <div className="text-yellow-900 text-2xl font-semibold mt-4">
              Low-Sugar & Gluten-Free Cheesecakes
              </div>
              <div className="text-yellow-900 text-xs mt-6">
              Welcome to our guilt-free indulgence zone, where were
                redefining the art of cheesecake with our delectable
                low-sugar...
              </div>
              <div className="text-yellow-900 text-base font-medium mt-6">
                Read More
              </div>
            </span>
          </div>
          {/* 3 */}
          <div className="flex flex-col  items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <span className="shadow-2xl bg-yellow-50 flex grow flex-col items-stretch w-full px-8 py-7 rounded-2xl max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src={Blog3}
                className="aspect-square object-contain object-center w-full overflow-hidden max-md:mr-1.5"
              />
              <div className="text-amber-700 text-lg font-medium mt-7">
              1 January, 2024 / Cheesecake
              </div>
              <div className="text-yellow-900 text-2xl font-semibold mt-4">
              Sweet Words - Customer Reviews of Cheesecakes
              </div>
              <div className="text-yellow-900 text-xs mt-6">
              Indulge in the rich tapestry of heartfelt stories within
                &quot;Sweet Words.&quot; This curated collection of customer
                reviews offers a glimpse into the joy...
              </div>
              <div className="text-yellow-900 text-base font-medium mt-6">
                Read More
              </div>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}



export default App
