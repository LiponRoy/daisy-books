import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton';
import { MdPlayArrow } from 'react-icons/md';
import { bookFilter, bookSort } from '@/constants';
import { useGetBooksQuery } from '@/redux/feature/bookApi';
import useSearchFilter from '@/hooks/useSearchFilter';
import useLeftSidebar from '@/hooks/useLeftSidebar';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

const BookFilter = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
  const { FILTER_BY_CATEGORY, SORT_PRODUCT, CALCULATE_MAX_MIN_PRICE, MIN_PRICE, MAX_PRICE, FILTER_BY_PRICE } = useSearchFilter();
  const leftSideBar = useLeftSidebar()

  const allCategory = [...new Set(data?.map((prod) => prod.category)), 'All'];
  const [category, setCategory] = useState<string>('All');
  const [price, setPrice] = useState<number>(1000);
  const [sort, setSort] = useState<string>('letest');

  console.log("min price", MIN_PRICE)
  console.log("max price", MAX_PRICE)

  const filterProduct = (cat: string) => {
    setCategory(cat);
    data !== undefined && FILTER_BY_CATEGORY(data, cat);
  };

  useEffect(() => {
    data !== undefined && CALCULATE_MAX_MIN_PRICE(data)
  }, [data]);

  useEffect(() => {
    data !== undefined && FILTER_BY_PRICE(data, price)
  }, [data, price]);

  useEffect(() => {
    data !== undefined && SORT_PRODUCT(data, sort);
  }, [sort]);

  const clearFilter = () => {
    filterProduct("All")
    setPrice(1000)
    setSort("Letest")

  }

  return (

    <div className="">
      <div className="w-full pl-8 pt-4 gap-6 z-50">
        {/* Category Filter*/}
        <div className="flex flex-col justify-center items-start">
          <div className=" flex justify-center items-center ">
            <span className=" text-slate-500 text-lg font-semibold py-2 ">
              Categories
            </span>
            <div className="hidden md:flex">
              <MdPlayArrow className="text-light_green" size={24} />
            </div>
          </div>


          {allCategory?.map((item) => (
            <div
              // onClick={leftSideBar.onClose}
              key={item}
              className=" flex flex-col text-slate-600 cursor-pointer "
            >
              <span
                onClick={() => filterProduct(item)}
                className={`border-b-2  w-[100px] pt-1${item === category ? ' border-light_green' : ''
                  }`}
              >
                {item}
              </span>
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
            <div className="hidden md:flex">
              <MdPlayArrow className="text-light_green" size={24} />
            </div>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            name="sort-by"
            className=" rounded bg-white border-b-2 text-slate-600 cursor-pointer"
          >
            {bookSort.map((item) => (
              <option key={item.id}>{item.titles}</option>
            ))}
          </select>
        </div>
        {/* End Sort By*/}

        {/* Price rang */}
        <div className="hidden md:flex flex-col justify-center items-start pr-2">
          <div className=" flex justify-center items-center">
            <span className=" text-slate-500 text-lg font-semibold py-2">
              Price
            </span>
            <div className="hidden md:flex">
              <MdPlayArrow className="text-light_green" size={24} />
            </div>
          </div>
          <p className="text-slate-500 ">{price}</p>
          <input
            className="pr-6 accent-light_green"
            type="range"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
            min={MIN_PRICE}
            max={MAX_PRICE}
          ></input>
        </div>
        {/* End Price rang */}

        <div className="flex-col-start mt-8 gap-y-4">


          {/*Apply Filter Button ( only close window ) */}
          <div className=" cursor-pointer md:hidden">
            <div className='bg-light_green p-2  rounded-md text-white text-sm md:text-base flex-center gap-x-3'>
              <FaCheck size={14} />
              <span onClick={leftSideBar.onClose}>Apply</span>
            </div>
          </div>
          {/* Clear Filter Button */}


          <div className=" cursor-pointer">
            <div className='bg-light_green p-2  rounded-md text-white text-sm md:text-base flex-center gap-x-3'>
              <RxCross2 size={16} />
              <span onClick={clearFilter}>Clear </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BookFilter;
