"use client";

import React from "react";

const BookDetailSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[80%] m-28 animate-pulse">
      {/* Left side (book detail skeleton) */}
      <div className="px-4 md:mr-2 flex justify-center items-center gap-x-8 md:gap-x-8">
        {/* Image skeleton */}
        <div className="w-[150px] h-[200px] md:w-[400px] md:h-[500px] rounded-md bg-gray-300 border-2 border-slate-300" />

        {/* Info skeleton */}
        <div className="flex flex-col gap-y-4 w-full">
          <div className="h-6 w-3/4 rounded bg-gray-300" />
          <div className="h-5 w-1/2 rounded bg-gray-300" />
          <div className="h-5 w-1/3 rounded bg-gray-300" />
          <div className="h-5 w-1/4 rounded bg-gray-300" />
          <div className="h-5 w-2/3 rounded bg-gray-300" />
          <div className="h-5 w-1/2 rounded bg-gray-300" />
          <div className="h-20 w-[80%] rounded bg-gray-300 hidden md:block" />
          <div className="h-8 w-28 rounded-md bg-gray-300 mt-3" />
        </div>
      </div>

      {/* Right side (related books skeleton) */}
      <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
        <div className="mb-4">
          <div className="h-4 w-16 rounded bg-gray-300 mb-2" />
          <div className="h-4 w-8 rounded bg-gray-300" />
        </div>

        <div className="flex flex-row md:flex-col justify-center items-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="m-2 border-2 border-gray-200 p-2 rounded-md"
            >
              <div className="w-[50px] h-[70px] md:w-[300px] md:h-[100px] bg-gray-300 rounded-md" />
            </div>
          ))}
        </div>

        <div className="flex-center gap-x-2 text-sm w-full mt-4">
          <div className="h-5 w-5 rounded-full bg-gray-300" />
          <div className="h-4 w-12 rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default BookDetailSkeleton;
