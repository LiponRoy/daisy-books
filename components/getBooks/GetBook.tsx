"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton";
import useBookDetailStore from "@/hooks/useBookDetailStore";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/useCartStore";
import { BsFillCartDashFill } from "react-icons/bs";

const GetBook = ({ book }) => {
  const { addItemToCart, cartProducts } = useCartStore();
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
      <div className="relative border-2 flex flex-col justify-center items-start px-1 group">
        {/* product Image */}
        <div
          onClick={() => sendIdToStore(id)}
          className=" relative  w-full cursor-pointer"
        >
          <Image
            className="w-full h-60 object-contain"
            src={imageSrc}
            width={400}
            height={400}
            alt="no img found"
          />

          <div className=" absolute inset-0 flex justify-center items-center bg-black/70 opacity-0 group-hover:opacity-100 transition  ">
            <span className=" text-xl text-white">View Details</span>
          </div>
        </div>
        {/*End product Image */}

        {/*Product Containt */}
        <div className=" pt-4 pb-3 px-4 flex flex-col justify-center items-start text-slate-600">
          <div className=" flex justify-center items-center gap-x-2">
            <span className=" capitalize  font-r ">{title} </span>
          </div>
          <div className=" flex justify-center items-center gap-x-2">
            <span>Price:</span>
            <span className=" capitalize  font-r ">{price}</span>
          </div>
        </div>

        <div
          onClick={addToCart}
          className=" absolute bottom-[6px] right-[6px] flex justify-center items-center bg-light_green text-white w-10 h-10 rounded-full cursor-pointer hover:border-2 border-slate-400"
        >
          <div className="hover:animate-pulse ">
            <BsFillCartDashFill size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetBook;
