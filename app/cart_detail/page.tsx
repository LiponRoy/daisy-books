"use client"
import ClientOnly from '@/components/ClientOnly';
import CustomButton from '@/components/CustomButton';
import useCartStore from '@/hooks/useCartStore';
import { IBook } from '@/types/ndex';
import Image from 'next/image';
import { it } from 'node:test';
import React, { useEffect } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

const page = () => {
  const { cartProducts, removeItemFromCart, incrementCart, decrementCart } = useCartStore();



  useEffect(() => { }, [cartProducts])

  const deleteItem = (item: IBook) => {
    removeItemFromCart(item)

  }

  const incrementItem = (item: IBook) => {

    incrementCart(item)


  }
  const decrementItem = (item: IBook) => {

    decrementCart(item)


  }





  return (

    <>
      <ClientOnly>
        <div className=" container ">

          <div className=" grid grid-cols-6">
            <div className=" col-span-4 mx-8 my-1">
              {cartProducts && cartProducts.map((item) => (
                <div className=" flex justify-between items-center p-1 my-2 bg-off_white border border-light_green rounded-md shadow">
                  <Image src={item.imageSrc} width="200" height="200" alt='no pic' className=' w-14 h-full' />
                  <div className=" hidden  md:flex flex-col justify-start">
                    <span>{item.title}</span>
                    <span>{item.price} <span className=' ml-1'>TK</span> </span>
                  </div>

                  <div className="flex-center gap-x-1">
                    <div onClick={() => incrementItem(item)} className=" text-light_green cursor-pointer ">
                      <FaSquarePlus size={26} />
                    </div>
                    <span className=' mx-2'>{item.cartQuantity}</span>
                    <div onClick={() => decrementItem(item)} className={` ${item.cartQuantity === 1 ? "text-slate-400 cursor-not-allowed" : "text-light_green cursor-pointer"}`}>
                      <FaSquareMinus size={26} />
                    </div>

                  </div>
                  <div onClick={() => deleteItem(item)} className="cursor-pointer mr-2 text-light_green">
                    <RiDeleteBin6Line size={26} />
                  </div>

                </div>
              ))}
            </div>
            <div className=" col-span-2 flex flex-col justify-start items-center bg-orange-400 mx-8 my-3 rounded-md">
              <span>right side</span>
              <span>right side</span>
              <span>right side</span>
              <span>right side</span>
              <span>right side</span>
              <span>right side</span>
              <span>right side</span>

            </div>
          </div>



        </div>

      </ClientOnly>
    </>
  )
}

export default page
