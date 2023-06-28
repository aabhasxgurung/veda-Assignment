"use client"


import HomePage from './modules/HomePage/HomePage'
import HomeProduct from './modules/HomePage/HomeProduct'

import CardItem from './components/Carditem';


export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomePage />
      <CardItem />
      <div className='mt-20 md:mt-80 padding-x padding-y max-w mb-16'>
        <HomeProduct />
      </div>
    </div >

  )
}