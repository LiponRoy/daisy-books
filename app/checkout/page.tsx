"use client"
import Input from '@/components/Input';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from 'react'
import useCartStore from '@/hooks/useCartStore';
import { Heading } from '@/components/heading/Heading';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
  const { totalPrice } = useCartStore();
  const router = useRouter()

  const [btnDisabled, setBtnDisabled] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({

    values: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      currency: "",
      price: totalPrice,
      address: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    console.log(data)

    // try {
    //   // backend API end-point
    //   const res = await axios.post("http://localhost:3000/payment", data);
    //   // redirect to the payment page
    //   router.push(res?.data?.url);
    // } catch (error) {
    //   console.log(error);
    // }



  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" basis-1/2 hidden md:flex">
          <Image
            className='h-[50%] w-[50%]' 
            src='/pement.jpg'
            alt='logo'
            width={400}
            height={400}
          />
        </div>
        <div className=" m-10 w-full md:mt-8 md:m-0 md:basis-1/2 md:max-w-md  ">
          <Heading title="Shipping Address" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="firstName"
              label="firstName"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="lastName"
              label="lastName"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="phone"
              label="phone"
              register={register}
              errors={errors}
              required
              type="number"
            />
            <Input
              id="email"
              label="email"
              register={register}
              errors={errors}
              required
              type="text"
            />


            {/* Currency */}
            <div className="w-[95%]  mx-auto mt-1">
              <label className="block  ml-1  text-sm text-slate-500 dark:text-white">
                Currency
              </label>
              <select
                id="currency"
                {...register("currency")}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-light_green focus:border-light_green block w-full p-[13px] my-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light_green dark:focus:border-light_green"
              >
                {/* <option selected >Choose please</option> */}
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
              </select>
            </div>
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
              id="address"
              label="address"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <CustomButton
              disabled={btnDisabled}
              label={btnDisabled ? "Paying..." : "PAY"}
              type="submit"
            />
          </form>
        </div>


      </div>

    </>
  )
}

export default page
