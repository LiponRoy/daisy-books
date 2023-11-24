"use client";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import useSearchFilter from "@/hooks/useSearchFilter";
import GetBook from "./GetBook";
import BookFilter from "../allFilter/BookFilter";

const GetBooks = () => {
  const { FILTER_BY_SEARCH, filteredBook } = useSearchFilter();
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();

  // for search item
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {

    data && FILTER_BY_SEARCH(data, searchProduct);

  }, [searchProduct, data])


  return (
    <>
      {/* book wrapper */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
        {/* sideBar */}
        <div className=" col-span-1 px-4 bp-6 shadow rounded  overflow-hidden">
          <BookFilter />
        </div>

        {/* main */}
        <div className=" col-span-3">
          <div className=" flex justify-between items-center my-2">
            {/* left-Side */}
            <div className="">
              {filteredBook.length === 0 ? <span className=" text-red-700">No Item Found</span> : <span className=" text-slate-500 text-md font-medium">{`${filteredBook.length}`}: Item Found</span>}
            </div>
            {/* right-Side */}
            <Search
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
            />
          </div>
          <div className={`${isLoading || filteredBook.length === 0 ? " h-screen w-full flex justify-center items-center" : " grid grid-cols-1 md:grid-cols-4 gap-4"}`}>
            {isLoading ? <div className=" text-2xl font-medium">Loading...</div> : filteredBook && filteredBook.map((book) => (
              <GetBook key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
      {/* book wrapper */}
    </>
  );
};

export default GetBooks;
