import React from "react";
import CustomButton from "../CustomButton";
import { MdPlayArrow } from "react-icons/md";
import { bookFilter, bookSort } from "@/constants";

const BookFilter = () => {
  return (
    <div className="w-full pl-8 pt-4 gap-6">
      {/* Category Filter*/}
      <div className="flex flex-col justify-center items-start">
        <div className=" flex justify-center items-center ">
          <span className=" text-slate-500 text-lg font-semibold py-2 ">
            Categories
          </span>
          <MdPlayArrow className="text-light_green" size={24} />
        </div>
        <span className=" border-b-2  w-[100px] text-slate-500  ">All</span>
        {bookFilter.map((item) => (
          <div key={item.id} className=" flex flex-col text-slate-600 ">
            <span className=" border-b-2  w-[100px] pt-1">{item.titles}</span>
          </div>
        ))}
      </div>
      {/* End Category Filter*/}

      {/* Sort By*/}
      <div className="flex flex-col justify-center items-start w-full my-4">
        <div className=" flex justify-center items-center ">
          <span className=" text-slate-500 text-lg font-semibold py-2">
            Sort By
          </span>
          <MdPlayArrow className="text-light_green" size={24} />
        </div>

        <select
          name="sort-by"
          className=" rounded bg-white border-b-2 text-slate-600 "
        >

          {
            bookSort.map((item)=>(
                <option key={item.id} value="all">{item.titles}</option>
            ))
          }
        </select>
      </div>
      {/* End Sort By*/}

      {/* Price rang */}
      <div className="flex flex-col justify-center items-start">
        <div className=" flex justify-center items-center">
          <span className=" text-slate-500 text-lg font-semibold py-2">
            Price
          </span>
          <MdPlayArrow className="text-light_green" size={24} />
        </div>
        <p className="text-slate-500 ">1500</p>
        <input
          className="range pr-6 accent-light_green"
          type="range"
          name="price"
          min="100"
          max="1000"
        ></input>
      </div>
      {/* End Price rang */}

      {/* Clear Filter Button */}
      <div className=" w-1/2">
        <CustomButton label="Clear Filter" />
      </div>
      {/*End  Clear Filter Button */}
    </div>
  );
};

export default BookFilter;
