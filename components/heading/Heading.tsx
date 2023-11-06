import React from 'react'

interface Iheading {
    title: string
}

export const Heading = ({ title }: Iheading) => {

    return (
        <div className=' flex flex-col justify-center items-center'>
            <span className=' font-semibold text-2xl text-light_green my-2'>{title}</span>

        </div>
    )
}
