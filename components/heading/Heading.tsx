import React from 'react'

interface Iheading {
    title: string
}

export const Heading = ({ title }: Iheading) => {

    return (
        <div className=' flex-center my-4'>
            <span className=' font-semibold text-xl text-slate-600 '>{title}</span>

        </div>
    )
}
