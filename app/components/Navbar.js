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
            <div className='w-full h-0 md:h-[148px] flex justify-between overflow-hidden lg:pl-52 lg:pr-52'>
                <div className='lg:hidden'>
                    <button
                        className='absolute p-2 top-[50px] right-4 rounded-md z-50 bg-gray-200 text-gray-800'
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
                                        <Link href='/product' onClick={toggleMobileMenu} className='text-[32px] font-medium'>
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
                    <div className='leading-[63.98px] hidden lg:block flex-start'>
                        <Image
                            src='/images/LOGO.png'
                            width={139}
                            height={64}
                            alt=''
                            className='leading-[63.98px] ml-8 mt-12  hidden sm:hidden md:block'
                        />
                    </div>
                </Link>

                <div className='hidden lg:block w-full md:w-auto '>
                    <ul className='font-medium flex  flex-col p-4 md:p-2 mt-16 md:flex-row md:space-x-8'>
                        <li className='text-[25px] leading-[38px] text-color font-semibold px-[25px] rounded-full bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 '>
                            <Link href="/">Home</Link>
                        </li>
                        <li className=' bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent border-2 border-fuchsia-400 rounded-full text-[25px] text-color leading-[38px] font-semibold px-[25px] '>
                            <Link href={"/product"}>Products</Link>
                        </li>
                    </ul>
                </div>



            </div >
        </div >
    );
};

export default Navbar;
