import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton';
import { MdPlayArrow } from 'react-icons/md';
import { bookFilter, bookSort } from '@/constants';
import { useGetBooksQuery } from '@/redux/feature/bookApi';
import useSearchFilter from '@/hooks/useSearchFilter';
import useLeftSidebar from '@/hooks/useLeftSidebar';

const BookFilter = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
  const { FILTER_BY_CATEGORY, SORT_PRODUCT } = useSearchFilter();
  const leftSideBar = useLeftSidebar()

  const allCategory = [...new Set(data?.map((prod) => prod.category)), 'All'];
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('letest');

  const filterProduct = (cat: string) => {
    setCategory(cat);
    FILTER_BY_CATEGORY(data, cat);
  };

  useEffect(() => { }, [data]);

  useEffect(() => {
    SORT_PRODUCT(data, sort);
  }, [sort]);

  const clearFilter = () => {
    setCategory("All");
    setSort("letest")
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
        {/* //item.titles === category ? */}

        {allCategory.map((item) => (
          <div
          onClick={leftSideBar.onClose}
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
            <option onClick={leftSideBar.onClose} key={item.id}>{item.titles}</option>
          ))}
        </select>
      </div>
      {/* End Sort By*/}

      {/* Price rang */}
      <div className="hidden md:flex flex-col justify-center items-start">
        <div className=" flex justify-center items-center">
          <span className=" text-slate-500 text-lg font-semibold py-2">
            Price
          </span>
          <div className="hidden md:flex">
          <MdPlayArrow className="text-light_green" size={24} />
          </div>
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
      <div className=" w-full mt-8">
        {/* <CustomButton onClick={clearFilter} label="Clear Filter" /> */}
        <span className='bg-light_green p-2  rounded-md text-white' onClick={clearFilter}>Clear Filter</span>
      </div>
      {/*End  Clear Filter Button */}
    </div>
    
      </div>
  );
};

export default BookFilter;
