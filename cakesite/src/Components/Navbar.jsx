import React from 'react'
import Logo from "../assets/LOGO.png"


function Navbar() {
  return (
    <>
      <div className=" flex flex-row justify-between items-center max-sm:flex-col max-md:max-w-full">
              <img
              src={Logo}
                loading="lazy"
                className="aspect-square object-contain object-center w-[165px] overflow-hidden max-w-full"
              />
            <nav className="bg-yellow-900 bg-opacity-80 flex max-w-[446px] items-start justify-between gap-5 pr-8 rounded-xl max-sm:mb-4">
              <a href="#" className="text-yellow-900 text-opacity-80 text-center text-base font-bold whitespace-nowrap bg-white self-stretch grow justify-center items-stretch px-7 py-4 rounded-xl" aria-label="Home">Home</a>
              <div className="text-white cursor-pointer text-base font-semibold self-center my-auto">About Us</div>
              <div className="text-white cursor-pointer text-base font-semibold self-center my-auto">Menu</div>
              <div className="text-white cursor-pointer text-base font-semibold self-center my-auto">Blog</div>
              <div className="text-white cursor-pointer text-base font-semibold self-center grow whitespace-nowrap my-auto">Contact</div>
            </nav>
             <span className=" text-stone-700 text-base font-medium whitespace-nowrap justify-center items-stretch mr-36 px-6 py-4 rounded-[38px] border-2 border-solid border-stone-700 max-md:mr-2.5 max-md:mb-10 max-md:px-5">
                Sign up
              </span>
            </div>
    </>
  )
}

export default Navbar
