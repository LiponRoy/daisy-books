import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    return (
        <div className='h-[60vh] w-full flex-center bg-off_white gap-x-20'>

            <div className=" flex flex-col justify-center items-center gap-y-2">
                <Image
                    src='/reading.png'
                    alt='logo'
                    width={200}
                    height={200}
                    className='object-contain'
                />
                <div className=" flex flex-col justify-center items-center gap-y-4">
                    <span className='text-4xl md:text-6xl font-bold text-light_green'>Finding Books.</span>
                    <p>Special <span className=' text-4xl font-medium text-light_green'>50%</span > Off For Our Student Community</p>
                    <CustomButton label='Buy Book' outline />

                </div>
            </div>
        </div>
    )
}

export default Hero