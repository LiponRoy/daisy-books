"use client";
import CustomButton from "@/components/CustomButton";
import useBookDetailStore from "@/hooks/useBookDetailStore";
import { useBookDetailQuery, useGetBooksQuery } from "@/redux/feature/bookApi";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TiArrowDownThick } from "react-icons/ti";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCartStore from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

const bookdetail = ({ params }: any) => {
  const { slug } = params;
  const router = useRouter();
  const { data, isFetching, isLoading, isSuccess } = useBookDetailQuery(slug);
  const { addItemToCart } = useCartStore();

  // For implements related books functionality
  const { data: allBook } = useGetBooksQuery();
  const relatedBook = allBook?.filter(
    (item) => item.category === data?.category && item.id !== data?.id
  );
  const setURLParam = (param: string) => {
    router.push(param);
  };

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <div className=" flex flex-col md:flex-row justify-between items-center  w-[80%] m-28 ">
          {/* left side ( book detail ) */}
          <div className=" px-4 md:mr-2">
            <div className=" flex justify-center items-center gap-x-8 md:gap-x-8">
              <Image
                src={data?.imageSrc || "/girl.png"}
                width={500}
                height={500}
                alt="no image found"
                className=" w-[150px] h-[200px] md:w-[400px] md:h-[500px] object-contain shadow mb-4 transform transition duration-500 
                hover:scale-110 border-2 border-slate-500"
              />
              <div className=" flex flex-col justify-center items-start w-full gap-y-2 text-slate-600">
                <span className=" text-xl md:text-2xl font-medium my-1">
                  <span className=" text-slate-700">{data?.title}</span>
                </span>
                <span className=" text-md md:text-lg ">
                  {" "}
                  <span className="font-medium mr-2 ">Author :</span>{" "}
                  {data?.author}
                </span>
                <span className="  text-md md:text-lg ">
                  <span className="font-medium mr-2">Category :</span>{" "}
                  {data?.category}
                </span>
                <span className="  text-md md:text-lg ">
                  <span className="font-medium mr-2">Price :</span>
                  {data?.price} Tk
                </span>
                <span className="  text-md md:text-lg ">
                  <span className="font-medium mr-2">Language :</span>
                  {data?.language}
                </span>
                <span className="  text-md md:text-lg ">
                  <span className="font-medium mr-2">Date :</span>
                  {data?.publicationDate}
                </span>
                <span className="hidden md:block  text-md md:text-lg w-[80%] ">
                  <span className="font-medium mr-2">Description :</span>
                  {data?.description}
                </span>

                <span className="text-md md:text-lg ">
                  <span className="font-medium mr-2">Availability :</span>
                  <span className=" text-light_green">In Stock</span>
                </span>

                <div className=" mr-1">
                  <span className=" p-1 md:p-2 mt-2 border-2 bg-light_green text-white border-slate-600 rounded-md cursor-pointer" onClick={() => data && addItemToCart(data)}>Add To Cart</span>

                </div>
              </div>
            </div>
          </div>
          {/* right side ( Related Books ) */}

          <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
            <div className="flex-col-center">
              <span className=" mb-1 text-sm font-semibold text-slate-500 text-right">
                Related
              </span>
              <div className=" animate-bounce text-slate-500 font-bold">
                <TiArrowDownThick size={18} />
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-center items-center">
              {relatedBook?.slice(-3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setURLParam(item.id)}
                  className="m-2 border-2 p-2 cursor-pointer hover:border-light_green"
                >
                  <Image
                    src={item?.imageSrc || "/girl.png"}
                    width={200}
                    height={200}
                    alt="no image found"
                    className=" w-[50px] h-[70px] md:w-[300px] md:h-[100px] object-contain shadow mb-1 "
                  />
                </div>
              ))}
            </div>
            {/* // go back home page */}
            <div className="flex-center gap-x-1 text-sm text-slate-600 hover:text-light_green cursor-pointer w-full mt-4">
              <div className=" animate-pulse">
                <AiOutlineHome size={20} />
              </div>
              <span className=" font-semibold text-base " onClick={() => router.push("/")}>Back</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default bookdetail;