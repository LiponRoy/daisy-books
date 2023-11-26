"use client"
import ClientOnly from '@/components/ClientOnly';
import CustomButton from '@/components/CustomButton';
import useCartStore from '@/hooks/useCartStore';
import { IBook } from '@/types/ndex';
import { it } from 'node:test';
import React, { useEffect } from 'react'
import { FiDelete } from "react-icons/fi";

const page = () => {
    const{cartProducts,removeItemFromCart}= useCartStore();



    useEffect(()=>{},[cartProducts])

    const deleteItem=(item:IBook)=>{
      removeItemFromCart(item)

    }





  return (

    <>
    <ClientOnly>
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      <span>{cartProducts.length!==0?"All Items ..":"No Item Found..."}</span>
        {cartProducts && cartProducts.map((item)=>(
            <div key={item.id} className=" relative flex flex-col justify-center items-start m-1 border p-2 rounded-md">00..

                <div className="flex flex-col justify-center items-start">
                <span>{item.title}</span>
                <span>{item.author}</span>
         

                
                <div onClick={()=>deleteItem(item)} className=" absolute -top-2 -right-6 cursor-pointer">
                <FiDelete size={24}/>
                </div>
                </div>
            </div>
          
        ))}
    </div>
    </ClientOnly>
    </>
  )
}

export default page
