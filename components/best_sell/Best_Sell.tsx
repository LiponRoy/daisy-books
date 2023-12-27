"use client";
import React from "react";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import Image from "next/image";

const Best_Sell = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();

  return (
    <div className=" flex-col-center mb-8">
      <span className=" my-8 text-2xl font-bold text-slate-600">Best Selling Books</span>
      <div className="flex-center">
      <div className=" grid grid-cols-1 md:grid-cols-8 w-full gap-4">
        {data &&
          data.slice(-8).map((val) => (
            <div className=" relative" key={val.id}>
              <Image
                className="w-full h-72 object-fill "
                src={val.imageSrc}
                width={600}
                height={600}
                alt="no img found"
              />
              <span className=" my-8"> {val.title}</span>
              <div className=" absolute -top-4 -right-2 bg-red-500 rounded text-white p-2 shadow-2xl">
                Best Sell
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Best_Sell;
