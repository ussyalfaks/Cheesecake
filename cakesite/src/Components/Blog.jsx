import React from 'react'
import Blog1 from "../assets/Blog1.png"
import Blog2 from "../assets/Blog2.png"
import Blog3 from "../assets/Blog3.png"

function Blog() {
  return (
    <>
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
  )
}

export default Blog
