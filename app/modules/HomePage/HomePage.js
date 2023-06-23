'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsArrowRightCircle } from 'react-icons/bs';
import './home.css';


const HomePage = () => {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        setLetters(Array.from('Logo Electronics'));
    }, []);

    return (
        <div className='w-screen relative flex justify-center items-center mt-1.5 overflow-hidden bg-[#380D41]'>
            {/* image */}
            <div className='w-full'>
                <Image src="/images/Homebg.png" alt='' width={1920} height={3774} />
                {/* <img src='images/Homebg.png' alt='Logo' className='w-full h-full mt-0 object-cover' /> */}
            </div>

            {/* heading inside image */}
            <div id='main' className='absolute top-[160px] transform -translate-y-1/2 text-center'>

                <h1 className='text-[60px] font-semibold text-[#F903AA] w-[602px] font-routhem leading-[129px] mt-[160px]'>

                    {/* heading animation */}
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            className='logo-letter'
                            style={{
                                animation: `letterAnimation 0.8s ease-in forwards`,
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                <div className='flex justify-center items-center'>
                    {/* horizontal lines */}
                    <div className='flex-grow h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full'></div>
                    <p className='text-[20px] mx-4 font-routhem uppercase tracking-widest text-white'>
                        The techies you love
                    </p>
                    {/* horizontal lines */}
                    <div className='flex-grow h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full'></div>
                </div>

                <div className='flex items-center p-6 mt-[74px]'>
                    <button className='font-routhem text-left border-[5px] text-[20px] rounded-full text-white hover:scale-105 duration-300 ease-in-out px-10 h-[82px] w-[483px] py-2 relative'>
                        View All Products
                        <BsArrowRightCircle size={47} className='w-[46.97px] h-[46.97px] ml-[46px] absolute top-[50%] -translate-y-1/2 right-4' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;