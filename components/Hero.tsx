import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosBicycle } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Hero = () => {
    return (
        <div className=' mt-24 w-full flex flex-col md:flex-row justify-between items-center bg-slate-50'>


            <div className="basis-[40%] h-full flex-center">
                <Image
                    className='w-28 h-32 md:h-[95%] md:w-[70%] '
                    src='/girl.png'
                    alt='logo'
                    width={400}
                    height={400}
                // style={{ objectFit: 'cover' }}
                // fill

                />
            </div>

            <div className="basis-[40%]  flex flex-col justify-center items-center h-full w-full ">
           <div className="flex-center">
           <span className='text-4xl md:text-7xl font-bold text-light_green'>Find Out ...  </span> 
           <div className="hidden md:flex text-slate-600">
           <IoBookOutline size="65"/>
           </div>
           </div>
                <span className='text-2xl md:text-5xl font-bold text-light_green my-4'>Your Favorite Book</span> 
                <div className=" hidden md:flex  md:flex-col justify-center items-center">
                <div className="my-4">
                    <p className='text-base md:text-2xl font-medium text-slate-600'>Special <span className=' text-5xl font-medium text-light_green '>50%</span > Off For Our Student Community</p>
                </div>
                <div className=" flex-col-start text-slate-600">
                    <span>"Books are the plane, and the train, and the road. They are </span>
                    <span>the destination, and the journey. They are home"</span>
                </div>
                </div>


            </div>

            {/* our services section */}
            <div className="basis-[20%] relative hidden  md:flex flex-row md:flex-col justify-center items-center border-l border-light_green">

                <span className='absolute -top-5 left-0 bg-light_green px-[4px] rounded-md text-white mb-2'>our services</span>

                <div className="flex justify-between items-center w-full px-8 rounded-md p-2 my-2">
                    <div className=" text-slate-600">
                        <CiDeliveryTruck size={28} />
                    </div>
                    <div className="text-slate-600 flex-col-start ml-8 w-full ">
                        <span className=' text-sm md:text-base'>Fast Delivery</span>
                        <span className=' text-xs'>Any Where</span>

                    </div>

                </div>

                <div className="flex justify-between items-center w-full px-8  rounded-md p-2 my-2">
                    <div className=" text-slate-600">
                        <IoIosBicycle size={28} />
                    </div>
                    <div className="text-slate-600 flex-col-start ml-8 w-full">

                        <span className=' text-sm md:text-base'>Home Delivery</span>
                        <span className=' text-xs'>Across The Country</span>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full px-8  rounded-md p-2 my-2">
                    <div className=" text-slate-600">
                        <RiRefund2Line size={28} />
                    </div>
                    <div className="text-slate-600 flex-col-start ml-8 w-full">

                        <span className=' text-sm md:text-base'>Happy Return</span>
                        <span className=' text-xs'>Quality Ensured</span>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full px-8  rounded-md p-2 my-2">
                    <div className=" text-slate-600">
                        <CiDeliveryTruck size={28} />
                    </div>
                    <div className="text-slate-600 flex-col-start ml-8 w-full">

                        <span className=' text-sm md:text-base'>Cash on Delivery</span>
                        <span className=' text-xs'>After Receive</span>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full px-8  rounded-md p-2 my-2">
                    <div className=" text-slate-600 mr-2">
                        <FaHeadphonesSimple size={28} />
                    </div>
                    <div className="text-slate-600 flex-col-start ml-8 w-full">

                        <span className=' text-sm md:text-base'>Call Center</span>
                        <span className=' text-xs'>We Are Here</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero