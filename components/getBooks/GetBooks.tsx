'use client'
import { useGetBooksQuery } from '@/redux/feature/bookApi';
import Image from 'next/image';
import React from 'react'

const GetBooks = () => {
    const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
    console.log("book data is :", data)
    return (
        < >

            {
                data?.map((val) => (
                    <div key={val.id} className=" p-4 border-2 text-black">
                        <span>{val.name}</span>
                        <Image src={val.imageSrc} width={400} height={400} alt='no img found' />
                        {/* <span>{val.description}</span> */}

                    </div>
                ))
            }


        </>
    )
}

export default GetBooks