import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {
    const router = useRouter()
    return (
        <>
            <div onClick={() => router.push("/")} className=" rounded-md cursor-pointer">
                <div className=' text-lg text-light_green font-bold uppercase '>Daisy<span className=' text-4xl ml-2'>B</span>ooks</div>
                <div className=' text-slate-500 shadow-lg'>Online Book Store</div>
               
            </div> 
        </>
    )

}

export default Logo