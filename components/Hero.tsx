import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    return (
        <div className='container w-full flex flex-col md:flex-row justify-evenly items-center bg-off_white '>


            <div className="basis-1/2 h-full flex-center">
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

            <div className="basis-1/2  flex flex-col justify-center items-center h-full w-full">
                <span className='text-4xl md:text-6xl font-bold text-light_green'>Finding Books.</span>
                <p>Special <span className=' text-4xl font-medium text-light_green'>50%</span > Off For Our Student Community</p>
                <div className=" w-60 mt-4">
                    <CustomButton label='Buy Book' outline />
                </div>

            </div>
        </div>
    )
}

export default Hero