import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-full'>
            <div className='w-full h-[148px] flex bg-[#380D41] justify-between'>
                <Image src="/images/LOGO.png" width={139} height={64} className='lg:ml-[375px] mt-16 mb-10' />

                <div className='hidden w-full md:block md:w-auto'>
                    <ul className='ont-medium flex flex-col p-4 md:p-2 mt-16 rounded-lg md:flex-row md:space-x-8'>
                        <li className='absolute right-[34.31%] text-[25px] bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full px-4 flex items-center justify-center'>
                            <Link href="/homepage">Home</Link>
                        </li>
                        <li className='absolute right-[26.44%] text-[25px] bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full px-4 flex items-center justify-center'>
                            <Link href={"/product"}>Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar