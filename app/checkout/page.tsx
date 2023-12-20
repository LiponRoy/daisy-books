"use client"
import Input from '@/components/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import React from 'react'
import useCartStore from '@/hooks/useCartStore';

const page = () => {

  const {totalPrice} = useCartStore();

  return (
    <>
    <div className=" h-screen w-full flex justify-center items-center">
         <span>Checkout page ....</span>
         <span>Total Price: <span>{totalPrice}</span></span>
         {/* <Input/> */}
    </div>
    </>
  )
}

export default page
