"use client";
import { useGetBooksQuery } from "@/redux/feature/bookApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import useSearchFilter from "@/hooks/useSearchFilter";
import GetBook from "./GetBook";
import BookFilter from "../allFilter/BookFilter";
// for grid and list view
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
//for react-paginate
import ReactPaginate from "react-paginate";
import useBookGridOrListView from "@/hooks/useBookGridOrListView";
import { BsFilterLeft } from "react-icons/bs";
import useLeftSidebar from "@/hooks/useLeftSidebar";
import { RxCrossCircled } from "react-icons/rx";

const GetBooks = () => {
  const GridOrListView = useBookGridOrListView();
  const LeftSidebar = useLeftSidebar();

  console.log("leftsidebar : ", LeftSidebar.isOpen)


  const { FILTER_BY_SEARCH, filteredBook } = useSearchFilter();
  const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
  //for react-paginate
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(filteredBook.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  //end for react-paginate

  // for search item
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    data && FILTER_BY_SEARCH(data, searchProduct);
  }, [searchProduct, data]);

  return (
    <>
      {/* book wrapper */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
        {/* sideBar */}
        <div className="hidden md:flex  col-span-1 px-4 bp-6 shadow rounded  overflow-hidden">
          <BookFilter />
        </div>

        {/* main */}
        <div className="col-span-4 md:col-span-3">
          <div className=" flex justify-between items-center my-2">
            {/* left-Side */}
            <div className="flex justify-center items-center ">
              <div className=" mr-4">
                {filteredBook.length === 0 ? (
                  <span className=" text-red-700">No Item Found</span>
                ) : (
                  <div className="">
                    <span className="hidden md:flex justify-center items-center text-slate-500 text-md font-medium">
                      {`${filteredBook.length}`}- Item <span className="flex">Found</span>
                    </span>
                    <div onClick={LeftSidebar.onOpen} className="md:hidden flex justify-center items-center gap-x-1 cursor-pointer  rounded-md text-light_green ">
                      <BsFilterLeft size={28} />
                      <span className="text-slate-600">Filter</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* right-Side */}

            <div className=" flex-center">
              {/* list and grid view buttons */}
              <div className="hidden md:flex justify-center items-center  text-slate-500  gap-x-2 mr-4">
                <span className=" text-slate-500">View</span>
                <div onClick={GridOrListView.onTrue} className={` cursor-pointer ${GridOrListView.isListView && "text-light_green border-2 border-slate-200 p-1 rounded-md"}`}>
                  <FaList size={28} />
                </div>
                <div onClick={GridOrListView.onFalse} className={` cursor-pointer ${!GridOrListView.isListView && "text-light_green border-2 border-slate-200 p-1 rounded-md"}`}>
                  <TfiLayoutGrid3Alt size={24} />
                </div>
              </div>
              {/* End list and grid view buttons */}

              <Search
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
          </div>
          <div
            className={`${isLoading || filteredBook.length === 0
              ? " h-screen w-full flex justify-center items-center"
              : `grid grid-cols-1 ${GridOrListView.isListView ? "md:grid-cols-1" : "md:grid-cols-4"} gap-4`
              }`}
          >
            {isLoading ? (
              <div className=" text-2xl font-medium">Loading...</div>
            ) : (
              filteredBook &&
              filteredBook
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((book) => <GetBook key={book.id} book={book} />)
            )}
          </div>
          <ReactPaginate
            className=" flex justify-center items-center mt-6  "
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={changePage}
            previousLinkClassName={" p-1 rounded mx-2 text-lg text-slate-500 font-semibold"}
            nextLinkClassName={" p-1 rounded mx-2 text-lg text-slate-500 font-semibold"}
            disabledClassName={"m-1 text-red-600 "}
            pageLinkClassName={"m-1 text-xl  px-2"}
            activeClassName={"mx-1 text-light_green text-xl font-semibold border-2 border-light_green rounded-md"}
          />
        </div>
        {/* mobile sidebar for filter item */}

        <div


          className={`${LeftSidebar.isOpen && "fixed inset-0 bg-black/70 full-page-center z-40"
            }`}
        >
          <div
            className={`${LeftSidebar.isOpen ? "sidebarContainer" : "sidebarContainer-Hidden"

              }`}
          >


            <div onClick={LeftSidebar.onClose} className="absolute -top-7 -right-7 text-white cursor-pointer rounded-full border-4 border-light_green animate-spin hover:animate-none">
              <RxCrossCircled size={28} />
            </div>
            <BookFilter />

          </div>
        </div>
        {/* End mobile sidebar for filter item */}

      </div>
      {/* book wrapper */}
    </>
  );
};

export default GetBooks;
