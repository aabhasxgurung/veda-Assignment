'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsArrowRightCircle } from 'react-icons/bs';
import './home.css';
import Link from 'next/link';


const HomePage = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prevVisible) => !prevVisible);
        }, 3100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const logoText = "Logo Electronics";

    return (
        <div id='header' className='w-screen relative flex justify-center items-center mt-1.5 overflow-hidden bg-[#380D41]'>
            {/* image */}
            <div className='w-full h-[519px] sm:h-[839px]'>
                {/* <Image src="/images/Homebg.png" alt='' width={1920} height={3774} /> */}
                <picture>
                    <img src='/assets/image/Homebg.png' alt='Logo' className='w-full h-full mt-0 object-cover' />
                </picture>
            </div>

            {/* heading inside image */}
            <div id='main' className='absolute top-[160px] transform -translate-y-1/2 text-center'>

                <h1 className='text-[35px] sm:text-[60px] justify-center inline-flex items-center font-semibold text-[#F903AA] w-[342px] h-[73px] sm:w-[602px] sm:h-[129px] font-routhem leading-[129px] mt-[160px] tracking-widest text-wrapper'>

                    {/* heading animation */}
                    {logoText.split('').map((letter, index) => (
                        <span
                            key={index}
                            className={`logo-letter ${visible ? 'visible' : ''}`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                <div className='flex justify-center items-center'>
                    {/* horizontal lines */}
                    <div className='flex-grow h-2 w-4 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full sm:w-24'></div>
                    <p className='text-md mx-4 sm:text-[20px] font-routhem uppercase tracking-widest text-white'>
                        The techies you love
                    </p>
                    {/* horizontal lines */}
                    <div className='flex-grow h-2 w-4 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full sm:w-24'></div>
                </div>


                <div className='flex items-center p-6 sm:mt-[74px]'>
                    <Link href="/product">
                        <button className='font-routhem text-left sm:text-[20px] text-[15px]  px-10 md:h-[82px] md:w-[483px] h-[57px] w-[339px] gradientButton'>
                            <div className='gradientButtonOverlay'>

                            </div>
                            <span className='text-white hover:scale-105 duration-300 ease-in-out px-10'> View All Products</span>
                            <BsArrowRightCircle size={47} className='w-[32px] h-[32px] sm:w-[46.97px] sm:h-[46.97px] ml-[46px] absolute top-[50%] -translate-y-1/2 right-4' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;