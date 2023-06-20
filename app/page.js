"use client"

import Image from 'next/image'
import HomePage from './modules/HomePage/HomePage'
import HomeProduct from './modules/HomePage/HomeProduct'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomePage />

      <div className=' mt-96 padding-x padding-y max-w mb-16'>
        <HomeProduct />
      </div>

    </div>

  )
}