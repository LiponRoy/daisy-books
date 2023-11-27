"use client"
import CustomButton from '@/components/CustomButton';
import useBookDetailStore from '@/hooks/useBookDetailStore';
import { useBookDetailQuery } from '@/redux/feature/bookApi';
import { BsFillCartDashFill } from "react-icons/bs";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import useCartStore from '@/hooks/useCartStore';

const bookdetail = ({ params }: any) => {
    const { slug } = params;
    const { data, isFetching, isLoading, isSuccess } = useBookDetailQuery(slug);
    const { addItemToCart } = useCartStore();





    return (
        <div className=' h-screen w-full flex flex-col justify-center items-center'>
            {isFetching ? <span>Loading...</span> : <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-x-4'>
                <Image src={data?.imageSrc || "/girl.png"} width={600} height={600} alt="no image found" className=' w-[100px] md:w-[300px] h-[150px] md:h-[400px] object-cover border-4 border-light_green mb-4' />
                <div className=" flex flex-col justify-center items-start w-full gap-y-2">
                    <span className=' text-2xl font-medium my-1'>{data?.title}</span>
                    <span className=' text-xl '> <span className='font-medium mr-2'>Author :</span>  {data?.author}</span>
                    <span className=' text-xl '><span className='font-medium mr-2'>Category :</span> {data?.category}</span>
                    <span className=' text-xl '><span className='font-medium mr-2'>Price :</span>{data?.price} Tk</span>
                    <span className=' text-xl '><span className='font-medium mr-2'>Language :</span>{data?.language}</span>
                    <span className=' text-xl '><span className='font-medium mr-2'>Date :</span>{data?.publicationDate}</span>
                    <span className=' text-xl '><span className='font-medium mr-2'>Description :</span>{data?.description}</span>
                    <CustomButton onClick={() => addItemToCart(data)} icon={BsFillCartDashFill} label='Add To Cart' />

                </div>

            </div>}
        </div>
    )
}

export default bookdetail