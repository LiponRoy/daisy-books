"use client"
import useBookDetailStore from '@/hooks/useBookDetailStore';
import { useBookDetailQuery } from '@/redux/feature/bookApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const bookdetail = ({ params }: any) => {
    const { slug } = params;
    const { data, isFetching, isLoading, isSuccess } = useBookDetailQuery(slug);


    return (
        <div className=' h-screen w-full flex flex-col justify-center items-center'>
            {isFetching ? <span>Loading...</span> : <div className='flex flex-col justify-center items-start'>
                <Image src={data?.imageSrc || "/girl.png"} width={600} height={600} alt="no image found" className='w-60 h-60 object-cover mb-4' />
                <span className=' text-xl'>{data?.title}</span>
                <span className=' text-md'>{data?.author}</span>
                <span className=' text-md'>{data?.category}</span>
            </div>}
        </div>
    )
}

export default bookdetail