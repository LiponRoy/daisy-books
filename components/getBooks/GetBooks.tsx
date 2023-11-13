'use client';
import { useGetBooksQuery } from '@/redux/feature/bookApi';
import Image from 'next/image';
import React from 'react';

const GetBooks = () => {
    const { data, isFetching, isLoading, isSuccess } = useGetBooksQuery();
    console.log('book data is :', data);
    return (
        <>
            {/* book wrapper */}
            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
                {/* sideBar */}
                <div className=" col-span-1 px-4 bp-6 shadow rounded bg-slate-400 overflow-hidden">
                    <div className=" flex flex-col justify-center items-center">
                        <span>Side Bar</span>
                    </div>
                </div>

                {/* main */}
                <div className=" col-span-3">
                    <div className=" px-4 py-3 flex justify-between items-center">
                        <div>left-Side</div>
                        <div>right-Side</div>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
                        {data?.map((val) => (
                            <div
                                key={val.id}
                                className="border-2 rounded shadow flex flex-col justify-center items-start"
                            >
                                {/* product Image */}
                                <div className=" relative  w-full ">
                                    <Image
                                        className="h-52 object-cover"
                                        src={val.imageSrc}
                                        width={400}
                                        height={400}
                                        alt="no img found"
                                    />
                                    <div className=" absolute inset-0 hover:bg-black/10 transition ">

                                    </div>
                                </div>
                                {/*End product Image */}

                                {/*Product Containt */}
                                <div className=" pt-4 pb-3 px-4 flex flex-col justify-center items-start">
                                    <span className=' capitalize font-medium font-r text-lg'>{val.title}</span>
                                    <span>{val.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* book wrapper */}
        </>
    );
};

export default GetBooks;
