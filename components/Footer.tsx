"use client"
import { Policies, shopping_guids } from '@/constants';
import React from 'react'
import { Logo } from '.';
import { MdAddLocation } from "react-icons/md";
import { TbPhonePlus } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-4 my-4 border text-slate-600'>
            <div className=" columns-1 flex justify-center items-center">
                <div className="flex flex-col justify-center items-start w-full mb-2">
                    <div className=" border border-slate-400 rounded-md p-2 mb-2">
                        <Logo />
                    </div>

                    <div className=" flex justify-center items-center gap-2 mt-2 m-2">
                        <div className=" text-light_green">
                            <MdAddLocation size={32} />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <span>27/M Road, Victory  </span>
                            <span>Shyamoli, Dhaka</span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-2 mt-1 m-2">
                        <div className=" text-light_green">
                            <TbPhonePlus size={32} />
                        </div>
                        <span>+88 01734010550</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2 mt-1 m-2">
                        <div className=" text-light_green">
                            <MdOutlineMailOutline size={32} />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <span>Email: Contact@daisyBooks.com </span>
                            <span className=' cursor-pointer'>Website: https://daisy-books.vercel.app/</span>
                        </div>
                    </div>
                </div>


            </div>
            <div className=" columns-1 mt-4 m-2 w-full mb-2">
                <div className="flex justify-start md:justify-center items-center">

                    <div className="flex flex-col justify-center items-start">
                        <span className=' text-lg font-medium uppercase '>Shopping Guid</span>
                        {shopping_guids.map((val) => (
                            <div className=" my-2 cursor-pointer ">
                                <div className=" flex justify-center items-center gap-1">
                                    <div className=" text-light_green">
                                        <VscDebugBreakpointLog />
                                    </div>
                                    <span> {val.titles}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className=" columns-1 mt-4 m-2 w-full mb-2">
                <div className="flex justify-start md:justify-center items-center">

                    <div className="flex flex-col justify-center items-start">
                        <span className=' text-lg font-medium uppercase '>Policies</span>
                        {Policies.map((val) => (
                            <div className=" my-2 cursor-pointer ">
                                <div className=" flex justify-center items-center gap-1">
                                    <div className=" text-light_green">
                                        <VscDebugBreakpointLog />
                                    </div>
                                    <span> {val.titles}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className=" columns-1 mt-4 m-2 w-full mb-2">
                <div className="flex justify-start md:justify-center items-center">

                    <div className="flex flex-col justify-center items-start ">
                        <span className='text-base  font-bold'>Stay Connected</span>
                        <div className=" flex-center gap-2 mt-2 cursor-pointer">
                            <ImFacebook2 size={32} />
                            <ImLinkedin size={32} />
                            <GrInstagram size={32} />
                            <IoLogoYoutube size={38} />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer