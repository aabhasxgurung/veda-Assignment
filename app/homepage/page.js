import HomePage from '@/app/modules/HomePage/HomePage'
import React from 'react'
import HomeProduct from '../modules/HomePage/HomeProduct'

const page = () => {
    return (
        <div className='overflow-hidden'>
            <HomePage />

            <div className=' mt-96 padding-x padding-y max-w mb-16'>
                <HomeProduct />
            </div>

        </div>
    )
}

export default page