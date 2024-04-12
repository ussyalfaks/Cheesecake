import React from 'react'

function ContactUs() {
  return (
    <>
    <form
      className="bg-yellow-900 bg-opacity-90 flex w-full flex-col justify-center items-center mt-32 px-16 py-11 max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Contact Form"
    >
      <div className="w-full max-w-[1148px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
            <header className="text-yellow-50 text-6xl whitespace-nowrap ml-5 max-md:text-4xl max-md:ml-2.5">
              Contact Us
            </header>
            <div className="text-yellow-50 text-xl leading-8 self-stretch mt-9 max-md:max-w-full">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the department!
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bf234d4ad49096d1d00b69b5edf463f46a122ca693b088063bd6b80d159f88b?apiKey=1bcc27728ab244268fc16ff60580b199&"className="aspect-[1.02] object-contain object-center w-[356px] overflow-hidden max-w-full"
              alt="Contact Us Image"
            />
            <div className="self-stretch flex flex-col mt-11 pl-4 pr-9 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e97af8bd1bee5fb46146a6578628f8350c0952c2286692bf7d7988629daf8d?apiKey=1bcc27728ab244268fc16ff60580b199&"
                className="aspect-[5.95] cursor-pointer object-contain object-center w-64 overflow-hidden max-w-full"
                alt="Logo"
              />
            
            </div>
          </div>
          <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:mt-10">
              <input
                 type="name" placeholder='Name'
                className="text-neutral-500 outline-none text-xl whitespace-nowrap shadow-sm bg-stone-50 justify-center pl-5 pr-16 py-6 rounded-[60px] items-start max-md:pr-5"
              />
              
              <input
                type="email" placeholder='Email'
                className="text-neutral-500 outline-none text-xl whitespace-nowrap shadow-sm bg-stone-50 justify-center mt-5 pl-6 pr-16 py-6 rounded-[60px] items-start max-md:px-5"
              />
              
              <textarea
                type="text" placeholder='message'
                className="text-neutral-500 outline-none text-xl whitespace-nowrap shadow-sm bg-stone-50 mt-7 pl-6 pr-16 pt-7 pb-24 rounded-3xl items-start max-md:pb-10 max-md:px-5"
              />
             
              <button
                className="text-black text-center cursor-pointer text-2xl whitespace-nowrap shadow-sm bg-amber-400 hover:bg-amber-500 justify-center items-center mt-6 px-16 py-7 rounded-[60px] max-md:px-5"
                aria-label="Contact Us button"
              >
                Contact us now
              </button>
            </div>
          </div>
        </div>
        <footer className="text-yellow-50 text-xl font-medium self-stretch mt-3.5 max-md:max-w-full">
                Copyright 2024 Design by Amena | All rights reserved
              </footer>
      </div>
    </form>

    </>
  )
}

export default ContactUs
