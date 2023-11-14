import Image from 'next/image'
import React from 'react'


const GetBook = ({ book }) => {
    const { id, title, author, imageSrc } = book;
    return (
        <>
            <div
                key={id}
                className="border-2 rounded shadow flex flex-col justify-center items-start"
            >
                {/* product Image */}
                <div className=" relative  w-full ">
                    <Image
                        className="h-52 object-cover"
                        src={imageSrc}
                        width={400}
                        height={400}
                        alt="no img found"
                    />
                    <div className=" absolute inset-0 hover:bg-black/10 transition "></div>
                </div>
                {/*End product Image */}

                {/*Product Containt */}
                <div className=" pt-4 pb-3 px-4 flex flex-col justify-center items-start">
                    <span className=" capitalize font-medium font-r text-lg">
                        {title}
                    </span>
                    <span>{author}</span>
                </div>
            </div>
        </>
    )
}

export default GetBook