"use client"

import React , { useRef } from "react";
import Image from "next/image";
import Logo from "/public//Aiicon.png"

export default function Sidedar() {
  const sideRef = useRef();
  const data = [
    'today',
    'last 3 days'
  ]

  const handleSideBar = (check) => {
    if(check){
      sideRef.current.setAttribute("data-asid","none")
      window.document.getElementById("side_toggle").setAttribute("data-toggle","block")
    }else{
      sideRef.current.removeAttribute("data-asid")
      window.document.getElementById("side_toggle").removeAttribute("data-toggle")
    }
  }


 
  return (
    <div ref={sideRef} className="h-screen relative flex flex-col bg-clip-border rounded-xl text_theme sidebar h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex justify-between">
        {/* start logo */}
        <div className="mb-2">
          <Image src={Logo.src} alt="logo" width="30" height="30"/>
        </div>
        {/* end logo */}

        {/* start sidebar toggle */}
        <div>
          <input type="checkbox" id="checkbox" onChange={(e)=>handleSideBar(e.target.checked)}/>
          <label for="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
          </label>
        </div>
        {/* end sidebar toggle */}

      </div>

      <div className="py-4">
        <button class="plus_button box_theme m-auto" type="button">
          <span class="button__text text_theme ">Start New</span>
          <span class="button__icon ">
            <svg class="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
        </button>      
      </div>

      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text_theme font-normal ">
        {data.map((item,index)=>(
        <div key={index} role="button" tabindex="0" className="text_theme flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-green-500	 focus:text-green-500	 active:text-green-500 outline-none">
          <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>

          </div>
          {item}
        </div>
        ))}
      </nav>
    </div>
  );
}