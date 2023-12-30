import React from 'react'
// for swiper buttons prev next
import { useSwiper } from 'swiper/react';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const SwiperButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=' flex-center gap-x-1'>
            <div onClick={() => swiper.slidePrev()} className=" absolute top-0 bottom-0 left-0 mx-auto z-50  p-1 rounded-lg text-white cursor-pointer flex-center">
                <MdArrowBackIos size={68} />
            </div>
            <div onClick={() => swiper.slideNext()} className=" absolute top-0 bottom-0 right-0 mx-auto z-50  p-1 rounded-lg text-white cursor-pointer flex-center">
                <MdArrowForwardIos size={68} />

            </div>

        </div>
    )
}

export default SwiperButtons