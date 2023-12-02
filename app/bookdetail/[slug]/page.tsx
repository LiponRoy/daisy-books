"use client";
import CustomButton from "@/components/CustomButton";
import useBookDetailStore from "@/hooks/useBookDetailStore";
import { useBookDetailQuery, useGetBooksQuery } from "@/redux/feature/bookApi";
import { BsFillCartDashFill } from "react-icons/bs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCartStore from "@/hooks/useCartStore";

const bookdetail = ({ params }: any) => {
  const { slug } = params;
  const { data, isFetching, isLoading, isSuccess } = useBookDetailQuery(slug);


  const { addItemToCart } = useCartStore();

  // For implements related books system
  const { data: allBook } = useGetBooksQuery();
  const relatedBook = allBook?.filter((item) => item.category === data?.category && item.id !== data?.id);

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      {isFetching ? (
        <span>Loading...</span>
      ) : (

        <div className=" grid grid-cols-4 gap-x-12">

          <div className=" col-span-3 ">
            <div className=" flex flex-col md:flex-row justify-center items-start md:items-center gap-x-4">
              <Image
                src={data?.imageSrc || "/girl.png"}
                width={600}
                height={600}
                alt="no image found"
                className=" w-[100px] md:w-[300px] h-[150px] md:h-[400px] object-contain shadow mb-4 "
              />
              <div className=" flex flex-col justify-center items-start w-full gap-y-2 text-slate-600">
                <span className=" text-2xl font-medium my-1"><span className=" text-slate-700">{data?.title}</span></span>
                <span className=" text-lg ">
                  {" "}
                  <span className="font-medium mr-2 ">Author :</span> {data?.author}
                </span>
                <span className="  text-lg ">
                  <span className="font-medium mr-2">Category :</span>{" "}
                  {data?.category}
                </span>
                <span className="  text-lg ">
                  <span className="font-medium mr-2">Price :</span>
                  {data?.price} Tk
                </span>
                <span className="  text-lg ">
                  <span className="font-medium mr-2">Language :</span>
                  {data?.language}
                </span>
                <span className="  text-lg ">
                  <span className="font-medium mr-2">Date :</span>
                  {data?.publicationDate}
                </span>
                <span className="  text-lg ">
                  <span className="font-medium mr-2">Description :</span>
                  {data?.description}
                </span>

                <div className=" flex justify-center items-center gap-x-2">
                  <span className=" text-slate-400">Add To Cart -</span>
                  <div
                    onClick={() => data && addItemToCart(data)}
                    className=" flex justify-center items-center bg-light_green text-white w-12 h-12 rounded-full cursor-pointer hover:border-2 border-slate-400"
                  >
                    <div className="hover:animate-pulse ">
                      <BsFillCartDashFill size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className=" col-span-1  flex-col-center">
            <span className=" mb-4 text-lg font-semibold text-slate-600 text-right">Related Books</span>
            {
              relatedBook?.map((item) => (
                <div className="justify-center m-2 border p-2">
                  <Image
                    src={item?.imageSrc || "/girl.png"}
                    width={200}
                    height={200}
                    alt="no image found"
                    className=" w-[50px] h-[70px] object-contain shadow mb-1 "
                  />
                  <span>{item.title}</span>
                </div>
              ))

            }
          </div>


        </div>


      )}
    </div>
  );
};

export default bookdetail;
