"use client"


import HomePage from './modules/HomePage/HomePage'
import HomeProduct from './modules/HomePage/HomeProduct'

import CardItem from './components/Carditem';


export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomePage />
      <CardItem />
      <div className='md:mt-[50px] padding-x padding-y max-w'>
        <HomeProduct />
      </div>
    </div >

  )
}