import React from 'react'

interface Iheading {
    title: string
}

export const Heading = ({ title }: Iheading) => {

    return (
        <div className=' flex justify-start items-center my-8'>
            <span className=' font-semibold text-2xl text-light_green '>{title}</span>

        </div>
    )
}
