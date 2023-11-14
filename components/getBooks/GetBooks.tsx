"use client";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import useSearchFilter from "@/hooks/useSearchFilter";
import GetBook from "./GetBook";

const GetBooks = () => {
  const { FILTER_BY_SEARCH, filteredBook } = useSearchFilter();
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();

  // for search item
  const [searchProduct, setSearchProduct] = useState("");
  console.log("searchProduct is :", searchProduct);

  useEffect(() => {

    data && FILTER_BY_SEARCH(data, searchProduct);

  }, [searchProduct, data])


  return (
    <>
      {/* book wrapper */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
        {/* sideBar */}
        <div className=" col-span-1 px-4 bp-6 shadow rounded bg-slate-400 overflow-hidden">
          <div className=" flex flex-col justify-center items-center">
            <span>Side Bar</span>
          </div>
        </div>

        {/* main */}
        <div className=" col-span-3">
          <div className=" flex justify-between items-center my-2">
            <div className="text-slate-700 text-md font-medium">left-Side</div>
            <div className="">
              {filteredBook.length === 0 ? <span className=" text-red-700">No Item Found</span> : <span className=" text-slate-700 text-md font-medium">{`${filteredBook.length}`}: Item Found</span>}
            </div>
            <Search
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
            />
          </div>
          <div className={`${isLoading || filteredBook.length === 0 ? " h-screen w-full flex justify-center items-center" : " grid grid-cols-1 md:grid-cols-4 gap-4"}`}>
            {isLoading ? <div className=" text-2xl font-medium">Loading...</div> : filteredBook && filteredBook.map((book) => (
              <GetBook book={book} />
            ))}
          </div>
        </div>
      </div>
      {/* book wrapper */}
    </>
  );
};

export default GetBooks;
