import HomePage from '@/app/modules/HomePage/HomePage'
import React from 'react'
import HomeProduct from '../modules/HomePage/HomeProduct'
import CardItem from '../components/Carditem'

const page = () => {
    return (
        <div>
            <HomePage />
            <CardItem />

            <div className='mt-80 padding-x padding-y max-w mb-16'>
                <HomeProduct />
            </div>

        </div>
    )
}

export default page