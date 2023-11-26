"use client"
import ClientOnly from '@/components/ClientOnly';
import useCartStore from '@/hooks/useCartStore';
import { it } from 'node:test';
import React from 'react'

const page = () => {
    const{cartProducts}= useCartStore();
  return (

    <>
    <ClientOnly>
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      <span>All Items ..</span>
        {cartProducts && cartProducts.map((item)=>(
            <div key={item.id} className=" flex flex-col justify-center items-start m-1 border p-2 rounded-md">

                <span>{item.title}</span>
                <span>{item.author}</span>
         


            </div>
        ))}
    </div>
    </ClientOnly>
    </>
  )
}

export default page
