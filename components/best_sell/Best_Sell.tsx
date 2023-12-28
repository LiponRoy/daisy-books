"use client";
import React, { CSSProperties } from "react";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import Image from "next/image";
import { Heading } from "../heading/Heading";
// for Swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const Best_Sell = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();

  // for slider

  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "300px",
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  // for slider

  return (
    <div className=" flex-col-center mb-8">
      <Heading title="Best Selling Books" />
      <div className="flex-center">
        <div className="w-full">
        <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        
            {data &&
              data.slice(-10).map((val) => (
                <div className=" relative gap-x-4" key={val.id}>
                <SwiperSlide style={slideStyles}>
                
                  <Image
                    className="w-[95%] h-80 object-fill"
                    src={val.imageSrc}
                    width={600}
                    height={600}
                    alt="no img found"
                  />
                  <span className=" my-8"> {val.title}</span>
                  <div className=" absolute bottom-4 right-20 bg-red-500 rounded text-white p-2 shadow-2xl">
                    Best Sell
                  </div>
                
                </SwiperSlide>
                </div>
              ))}
         
        </Swiper>
      </div>
    </div>

  </div>
  );
};

export default Best_Sell;
