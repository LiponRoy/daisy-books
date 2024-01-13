import React from 'react'
import { FiGift } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { Heading } from '../heading/Heading';

const WeProvide = () => {
    return (
        <>
            <div className="flex flex-col justify-evenly items-center gap-y-6 p-8 border ">

                <Heading title="We Provide" />
                <p className=' px-4 md:px-60 text-center'>We share thousands of books with others by reviewing them.
                    Our goal is to get the books in the readers' hands all
                    over the world. Enjoy the possible book
                    buying experience with our reliable book store.</p>

                <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-y-4 md:gap-1">
                    <div className=" flex-col-center text-light_green border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                        <div className="mb-2">
                            <FiGift size="64" />
                        </div>
                        <span className=' text-deep_ash'>
                            FREE GIFT WRAP</span>
                    </div>
                    <div className=" flex-col-center text-light_green border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                        <div className="mb-2">
                            <MdOutlineLocalShipping size="64" />
                        </div>
                        <span className=' text-deep_ash'>INTIME SHIPPING</span>

                    </div>
                    <div className=" flex-col-center text-light_green border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                        <div className="mb-2">
                            <FaLaptop size="64" />
                        </div>
                        <span className=' text-deep_ash'>
                            ONLINE ORDERING</span>

                    </div>
                    <div className=" flex-col-center text-light_green border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                        <div className="mb-2">
                            <FaBook size="64" />
                        </div>
                        <span className=' text-deep_ash'>USED BOOK BUYING</span>

                    </div>
                    <div className=" flex-col-center text-light_green border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                        <div className="mb-2">
                            <FaBook size="64" />
                        </div>
                        <span className=' text-deep_ash'>USED BOOK BUYING</span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WeProvide