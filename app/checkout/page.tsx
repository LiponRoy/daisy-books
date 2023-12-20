"use client"
import Input from '@/components/Input';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from 'react'
import useCartStore from '@/hooks/useCartStore';
import { Heading } from '@/components/heading/Heading';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';

const page = () => {
  const { totalPrice } = useCartStore();

  const [btnDisabled, setBtnDisabled] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({

    values: {
      price: totalPrice,
      name: "",
      email: "",
      currency: "",
      address: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    console.log(data)

  };

  return (
    <>
      <div className=" flex justify-center items-center ">
        <div className=" basis-1/2 ">
          <Image
            className='h-[60%] w-[70%] '
            src='/pement.jpg'
            alt='logo'
            width={400}
            height={400}
          />
        </div>
        <div className="basis-1/2   mx-auto max-w-md">
          <Heading title="Shipping Address" />
          <form onSubmit={handleSubmit(onSubmit)}>

            <Input
              id="price"
              label="price"
              register={register}
              errors={errors}
              required
              disabled
              type="number"
            />
            <Input
              id="name"
              label="name"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="email"
              label="email"
              register={register}
              errors={errors}
              required
              type="text"
            />

            {/* Category */}
            <div className="w-[95%]  mx-auto mt-1">
              <label className="block  ml-1  text-sm text-slate-500 dark:text-white">
                Currency
              </label>
              <select
                id="currency"
                {...register("category")}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-light_green focus:border-light_green block w-full p-[13px] my-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light_green dark:focus:border-light_green"
              >

                <option value="children">BDT</option>
                <option value="Novel">USD</option>
              </select>
            </div>
            <Input
              id="address"
              label="address"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <CustomButton
              disabled={btnDisabled}
              label={btnDisabled ? "Posting..." : "SUBMIT"}
              type="submit"
            />
          </form>
        </div>


      </div>

    </>
  )
}

export default page
