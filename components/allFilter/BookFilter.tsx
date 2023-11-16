import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import { MdPlayArrow } from "react-icons/md";
import { bookFilter, bookSort } from "@/constants";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import useSearchFilter from "@/hooks/useSearchFilter";

const BookFilter = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
  const {FILTER_BY_CATEGORY}=useSearchFilter()

    const allCategory= [...new Set(data?.map((prod) => prod.category)), 'All'];
    const [category, setCategory] = useState('All');

    const filterProduct = (cat:string) => {
      setCategory(cat);
      FILTER_BY_CATEGORY(data,cat)
      
    };

    useEffect(() => {
   
    }, [data]);




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
        {/* //item.titles === category ? */}
        
        {allCategory.map((item) => (
          <div key={item} className=" flex flex-col text-slate-600 curs">
            <span onClick={()=>filterProduct(item)} className={`border-b-2  w-[100px] pt-1${item === category ?" border-light_green":""}`}>{item}</span>
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
