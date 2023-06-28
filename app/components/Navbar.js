"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='flex justify-between items-center h-full relative'>
            <div className='w-screen h-[148px] flex bg-[#380D41] absolute sm:relative'>
                <div className='lg:hidden'>
                    <button
                        className='absolute p-2 top-[100px] right-4 rounded-md z-50 bg-gray-200 text-gray-800'
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {isMobileMenuOpen && (
                        <div className='fixed top-0 left-0 w-screen h-screen bg-[#380D41] flex flex-col items-center z-50'>
                            <div className='text-white text-center'>
                                <Image
                                    src='/images/LOGO.png'
                                    width={139}
                                    height={64}
                                    alt='logo'
                                    className='justify-center tracking-widest mt-[134px]'
                                />
                                <ul className='flex flex-col p-4 space-y-4 mt-[82px]'>
                                    <li className='bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full px-4 flex items-center justify-center'>
                                        <Link href='/homepage' onClick={toggleMobileMenu} className='text-[32px] font-medium'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full px-4 flex items-center justify-center'>
                                        <Link hrzef='/product' onClick={toggleMobileMenu} className='text-[32px] font-medium'>
                                            Products
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className='absolute top-4 right-4 p-2 rounded-md bg-gray-200 text-gray-800'
                                onClick={toggleMobileMenu}
                            >
                                <FaTimes />
                            </button>
                        </div>

                    )}
                </div>
                <Link href="/">
                    <div className='hidden lg:block'>
                        <Image
                            src='/images/LOGO.png'
                            width={139}
                            height={64}
                            alt=''
                            className='ml-[175px] md:ml-[275px] lg:-[375px] mt-16 mb-10 transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        />
                    </div>
                </Link>

                <div className='hidden lg:block md:block md:w-auto '>
                    <ul className='font-medium flex flex-col p-4 md:p-2 mt-16 md:flex-row md:space-x-8'>
                        <li className='  text-[25px] bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full px-[25px] '>
                            <Link href="/homepage">Home</Link>
                        </li>
                        <li className=' text-[25px] bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full px-4 '>
                            <Link href={"/product"}>Products</Link>
                        </li>
                    </ul>
                </div>


            </div >
        </div >
    );
};

export default Navbar;
