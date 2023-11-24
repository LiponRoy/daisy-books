"use client"
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import useBookDetailStore from "@/hooks/useBookDetailStore";
import { useRouter } from "next/navigation";
import { IBook } from "@/types/ndex";


const GetBook = ({ book }) => {
  const BookDetailStore = useBookDetailStore();
  const router = useRouter();
  const { id, price, title, author, category, imageSrc } = book;

  const sendIdToStore = (id: string) => {
    useBookDetailStore.setState((state) => ({
      bookId: id
    }))

    // BookDetailStore.onOpen();
    router.push(`/bookdetail/${id}`)

  }

  return (
    <>
      <div className="border-2 rounded shadow flex flex-col justify-center items-start px-1">
        {/* product Image */}
        <div className=" relative  w-full ">
          <Image
            className="h-52 object-cover"
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
          <div className=" flex justify-center items-center gap-x-2">
            <span>Author:</span>
            <span className=" capitalize  font-r ">{author}</span>
          </div>
          <div className=" flex justify-center items-center gap-x-2">
            <span>Category:</span>
            <span className=" capitalize  font-r ">{category}</span>
          </div>
        </div>

        <CustomButton onClick={() => sendIdToStore(id)} label="Detail" outline />

      </div>
    </>
  );
};

export default GetBook;
