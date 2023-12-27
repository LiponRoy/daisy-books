import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {
    const router = useRouter()
    return (
        <>
            <div onClick={() => router.push("/")} className="cursor-pointer p-1">
                {/* <div className=' text-lg text-white font-bold uppercase'>Daisy <span className=' text-4xl'>B</span>ooks</div>
                <div className=' text-white'>Online Book Store</div> */}
               

                <Image
                    className='w-28 h-12 md:w-48 md:h-20'
                    src='/logo.png'
                    alt='logo'
                    width={600}
                    height={600}
                // style={{ objectFit: 'cover' }}
                // fill

                />
            </div> 
        </>
    )

}

export default Logo