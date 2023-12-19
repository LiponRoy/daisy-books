import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {
    const router = useRouter()
    return (
        <>
            <div onClick={() => router.push("/")} className="p-2 cursor-pointer">
                <div className=' text-lg text-light_green font-bold uppercase'>Daisy <span className=' text-4xl'>B</span>ooks</div>
                <div className=' text-deep_ash text-sm'>Online Book Store</div>
            </div> 
        </>
    )

}

export default Logo