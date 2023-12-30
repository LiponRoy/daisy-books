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


const Best_Sell = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();



  // for slider

  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "250px",
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 5,
    slidesPerView: "auto",

    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  // for slider

  return (
    <div className=" flex-col-center my-8 ">
      <Heading title="Top Selling Books" />
      <div className="flex-center p-1 border-2">
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

                    <div className=" absolute top-0 right-0 bg-red-500 rounded text-white p-2 shadow-2xl">
                      Top Sell
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
