"use client";
import React, { CSSProperties } from "react";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import Image from "next/image";
import { Heading } from "../heading/Heading";
// for Swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import SwiperButtons from "./SwiperButtons";
import { BsFillCartDashFill } from "react-icons/bs";


// Import Swiper styles
import "swiper/css";
import useCartStore from "@/hooks/useCartStore";
import { IBook } from "@/types";

const Best_Sell = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
  const { addItemToCart, cartProducts } = useCartStore();

  // for slider

  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "250px",
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  // end for slider

  // for add to cart
  
  // adding Item to cart
  const addToCart = (book:IBook) => {
    addItemToCart(book);

  };

  return (
    <div className=" flex-col-center mb-8">
      
      <div className="flex-center">
        <div className="w-64 md:w-full  mx-auto">
        <Heading title="Top Selling Books" />
          <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
            {data &&
              data.slice(-10).map((val) => (
                <div className=" relative gap-x-2" key={val.id}>
                  <SwiperSlide style={slideStyles}>
                    <Image
                      className="w-[95%] h-80 object-fill"
                      src={val.imageSrc}
                      width={600}
                      height={600}
                      alt="no img found"
                    />
                    {/* <span className=" my-8"> {val.title}</span> */}
                    {/* <div className=" absolute bottom-0 right-2 text-white p-2 flex-center bg-light_green rounded-l-lg shadow-lg border animate-bounce">
                      <span >Top Sell</span>
                    </div> */}
                    <div onClick={()=>addToCart(val)} className=" absolute bottom-0 left-0 text-white p-2 flex-center bg-light_green shadow-2xl border rounded-r-lg cursor-pointer " >
                    <BsFillCartDashFill size={24} />
                    <span className=" text-xs">add to cart</span>
                    </div>
                    
                  </SwiperSlide>
                </div>
              ))}
            <SwiperButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Best_Sell;
