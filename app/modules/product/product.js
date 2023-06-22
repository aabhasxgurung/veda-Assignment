"use client"
import React from 'react'

import DropdownButton from '@/app/components/DropdownButton'

import ProductAll from './ProductAll'


const Productcomp = () => {
    return (
        <div className='relative'>
            <img
                src="/images/homebg.png"
                alt=""
                className="filter brightness-50 dark:brightness-50 h-[549px] w-full object-cover"
            />
            <div className='absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className="font-routhem text-[60px] text-[#F903AA] shadow-md">PRODUCTS</h1>
            </div>
            <div className='flex p-10 justify-between items-center mt-20 mb-36'>
                <h1 className='text-[32px] font-semibold text-white'>{'>>'} All Products</h1>
                <DropdownButton />
            </div>
            <ProductAll />

        </div>
    )
}

export default Productcomp