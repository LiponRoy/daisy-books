"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton";
import useBookDetailStore from "@/hooks/useBookDetailStore";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/useCartStore";
import { BsFillCartDashFill } from "react-icons/bs";
import useBookGridOrListView from "@/hooks/useBookGridOrListView";
import { MdRemoveRedEye } from "react-icons/md";

const GetBook = ({ book }) => {
  const { addItemToCart, cartProducts } = useCartStore();
  const GridOrListView = useBookGridOrListView();
  const router = useRouter();
  const { id, price, title, author, category, imageSrc } = book;

  const sendIdToStore = (id: string) => {
    useBookDetailStore.setState((state) => ({
      bookId: id,
    }));

    router.push(`/bookdetail/${id}`);
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  // adding Item to cart
  const addToCart = () => {
    addItemToCart(book);
  };

  return (
    <>
      <div
        className={`border-2 pt-2  rounded-md flex ${
          GridOrListView.isListView
            ? " justify-start"
            : "flex-col  justify-center"
        }  ${GridOrListView.isListView ? "items-end" : "items-center"} group`}
      >
        {/* product Image */}
        <div
          onClick={() => sendIdToStore(id)}
          className=" relative  cursor-pointer"
        >
          <Image
            className="w-full h-60 object-fill border-2 border-slate-300"
            src={imageSrc}
            width={400}
            height={400}
            alt="no img found"
          />

          <div className=" absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition  ">
            <div className="flex-col-center text-white">
              <MdRemoveRedEye size={35} />
              <span className=" text-sm text-white shadow-md ">
                View Details
              </span>
            </div>
          </div>
        </div>
        {/*End product Image */}

        {/*Product Texts and btn */}
        <div
          className={`${
            GridOrListView.isListView ? "flex-col-start" : "flex-col-center"
          }`}
        >
          <div className={`pt-2 pb-2 px-1 flex flex-col justify-center ${GridOrListView.isListView ? "items-start ml-2":"items-center "} text-slate-600`}>
            <div className=" flex justify-center items-center gap-x-2">
              <span className=" capitalize  font-medium text-base ">
                {title}{" "}
              </span>
            </div>
            <div className=" flex justify-center items-center gap-x-2">
              <span>Price :</span>
              <span className=" capitalize  font-r ">
                {price} <span className=" ml-1">TK</span>
              </span>
            </div>
            {/* add to cart btn */}
            <div
              onClick={addToCart}
              className="flex justify-center items-center bg-light_green text-white rounded-md cursor-pointer  border-slate-400 p-2 my-2"
            >
              <div className="hover:animate-pulse flex justify-center items-center ">
                <div className="mr-2">
                  <BsFillCartDashFill size={20} />
                </div>
                <span className=" text-xs ml-1">Add To Cart</span>
              </div>
            </div>
            {/* End add to cart btn */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetBook;
