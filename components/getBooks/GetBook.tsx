"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton";
import useBookDetailStore from "@/hooks/useBookDetailStore";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/useCartStore";

const GetBook = ({ book }) => {
  const{ addItemToCart,cartProducts } = useCartStore();
  const router = useRouter();
  const { id, price, title, author, category, imageSrc } = book;

  const sendIdToStore = (id: string) => {
    useBookDetailStore.setState((state) => ({
      bookId: id
    }))

    router.push(`/bookdetail/${id}`)

  }

  useEffect(()=>{
    console.log(cartProducts)
  },[cartProducts])

  // adding Item to cart
  const addToCart =()=>{
    addItemToCart(book)
  }

  return (
    <>
      <div className="border-2 rounded shadow flex flex-col justify-center items-start px-1">
        {/* product Image */}
        <div className=" relative  w-full ">
          <Image
            className="h-44 object-cover"
            src={imageSrc}
            width={400}
            height={400}
            alt="no img found"
          />
          <div className=" absolute inset-0 hover:bg-black/10 transition "></div>
        </div>
        {/*End product Image */}

        {/*Product Containt */}
        <div className=" pt-4 pb-3 px-4 flex flex-col justify-center items-start text-slate-600">
          <div className=" flex justify-center items-center gap-x-2">
            <span>Price:</span>
            <span className=" capitalize  font-r ">{price}</span>
          </div>
          <div className=" flex justify-center items-center gap-x-2">
            <span>Title:</span>
            <span className=" capitalize  font-r ">{title}</span>
          </div>
          
        </div>

        <div className=" w-full flex justify-center items-center gap-x-1">
        <CustomButton onClick={() => sendIdToStore(id)} label="Detail" outline />
        <CustomButton onClick={addToCart} label="Add Cart" outline />
        </div>

      </div>
    </>
  );
};

export default GetBook;
