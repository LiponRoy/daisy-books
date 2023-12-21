"use client"
import { shopping_guids } from '@/constants';
import React from 'react'
import { Logo } from '.';
import { MdAddLocation } from "react-icons/md";
import { TbPhonePlus } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-4 my-4 border text-slate-600'> 
        <div className=" columns-1 flex justify-center items-center">
           <div className="flex flex-col justify-center items-start">
        <div className=" border border-slate-400 rounded-md p-2">
               <Logo/>
        </div>
            <div className=" border-b-2 border-deep_ash my-1"></div>
            <div className=" flex justify-center items-center gap-2 mt-2 m-2">
                <div className=" text-light_green">
                <MdAddLocation size={32}/>
                </div>
                <div className="flex flex-col justify-center items-start">
               <span>27/ka Road, Victory  </span>
                <span>Shyamoli, Dhaka</span>
               </div>
            </div>
            <div className=" flex justify-center items-center gap-2 mt-1 m-2">
            <div className=" text-light_green">
                <TbPhonePlus size={32}/>
                </div>
                <span>+88 01734010550</span>
            </div>
            <div className=" flex justify-center items-center gap-2 mt-1 m-2">
            <div className=" text-light_green">
                <MdOutlineMailOutline size={32}/>
                </div>
               <div className="flex flex-col justify-center items-start">
               <span>Email: Contact@daisyBooks.com </span>
                <span className=' cursor-pointer'>Website: https://daisy-books.vercel.app/</span>
               </div>
            </div>
           </div>


        </div>
        <div className=" columns-1 mt-4 m-2 w-full ">
            <div className="flex justify-start md:justify-center items-center">
           
           <div className="flex flex-col justify-center items-start">
           <span className=' text-lg font-medium uppercase '>Shopping Guid</span>
            {shopping_guids.map((val)=>(
             <div className=" m-2 cursor-pointer ">
                  <div className=" flex justify-center items-center gap-1">
                  <div className=" text-light_green">
                  <VscDebugBreakpointLog/>
                  </div>
                <span> {val.titles}</span>
                  </div>
             </div>
            ))}
           </div>
           </div>
           
        </div>
        <div className=" columns-1"></div>
        <div className=" columns-1"></div>

        </div>
    )
}

export default Footer