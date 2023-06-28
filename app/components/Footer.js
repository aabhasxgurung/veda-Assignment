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
        <>
            <div
                className="flex flex-col md:flex-row md:justify-between text-white p-10 mt-60 relative background ">

                <div className="flex items-center md:w-1/4">
                    <div className="flex flex-col ml-[30px] sm:ml-[75px] md:ml-1">
                        <Image
                            src="/images/LOGO.png"
                            alt=""
                            width={139}
                            height={64}
                            className="leading-[63.98px] mx-auto sm:ml-[35.16px]"
                        />

                        <p className="font-regular text-lg ml-4 sm:w-[412.8px] w-[283px] h-[135px] mt-[35.16px] sm:text-center">
                            LOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-[100px] md:mt-0 md:w-1/4">
                    <div id="links" className="text-center right-[44.83%] tracking-widest uppercase">
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

                <div className="flex items-center justify-center mt-[100px] md:mt-0 md:w-1/4">
                    <div className="sm:right-[11.25%]">
                        <h1 className="text-[25px] sm:text-lg font-bold mb-2 text-center">Follow Us on</h1>
                        <div className="flex space-x-20 mt-10 sm:mt-2 sm:space-x-2 items-center justify-center">
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

                <a href="#" onClick={scrollToTop} >
                    <Image src="/images/Group 202.png" alt='' width={100} height={150} className='right-0 absolute top-0 ' />
                </a>
            </div>
            <div className="text-center bottom-0 left-0 right-0 ">
                <p className="p-[39px] font-semibold text-[18px] text-white">COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
            </div>
        </>
    );
};

export default Footer;
