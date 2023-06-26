"use client"
import React from 'react';
import './footer.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Image from 'next/image';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const Footer = () => {
    return (
        <div
            className="flex flex-col sm:flex-row sm:justify-between text-white p-10 mt-60 relative  "
            style={{
                backgroundImage: `url('/images/Rectangle 82.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '600px',
            }}
        >

            <div className="flex items-center">
                <div className="flex flex-col">
                    <Image src="/images/LOGO.png" alt='' width={139} height={64} className='leading-[63.98px] ml-[35.16px]' />

                    <p className="font-regular text-lg ml-4 w-[412.8px] h-[135px] mt-[35.16px]">
                        LOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div id="links" className="text-center absolute right-[44.83%] tracking-widest uppercase">
                    <h1 className="font-bold mb-2 gradient-text leading-[30px] text-[25px] font-routhem">Useful Links</h1>
                    <a href="/" className="block mb-1">
                        Home
                    </a>
                    <a href="/" className="block mb-1">
                        Product
                    </a>
                    <a href="/" className="block mb-1">
                        About Us
                    </a>
                    <a href="/" className="block mb-1">
                        Contact Us
                    </a>
                </div>
            </div>

            <div className="flex items-center">
                <div className="absolute right-[11.25%]">
                    <h1 className="text-lg font-bold mb-2">Follow Us on</h1>
                    <div className="flex space-x-2 items-center justify-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <BsFacebook size={40} />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterCircle size={40} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram size={40} />
                        </a>
                    </div>
                </div>
            </div>

            <a href="#" onClick={scrollToTop} className="cursor-pointer">
                <Image src="/images/Group 202.png" alt='' width={108} height={184} className='right-10' />

            </a>

            <div className="text-center absolute mt-8 bottom-0 left-0 right-0">
                <p className="p-[39px] font-semibold">COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
            </div>
        </div>
    );
};

export default Footer;
