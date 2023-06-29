"use client"
import React from 'react';
import './footer.css';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
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
        < >
            <div id='rocket'
                className="flex flex-col md:flex-row md:justify-between text-white p-10 relative background mt-32" >
                <div className="mask-image absolute top-0 left-0 w-full h-full"></div>

                <div className="flex items-center md:w-1/4">
                    <div className="flex flex-col ml-[30px] sm:ml-[75px] md:ml-1">
                        <Image
                            src="/images/LOGO.png"
                            alt="Logo"
                            width={139}
                            height={64}
                            className="leading-[63.98px] mx-auto  sm:w-[139px] sm:h-[64px] w-[100px] h-[45px]"
                        />

                        <p className="font-regular texy text-lg ml-4 h-[135px] mt-[35.16px] sm:mb-4  mb-8 sm:text-center">
                            LOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                            standard dummy text ever since the 1500s, when
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-[120px] md:mt-0 md:w-1/4 z-50">
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

                <div className="social-media-icons flex items-center justify-center mt-[100px] md:mt-0 md:w-1/4 z-50">
                    <div className="sm:right-[11.25%]">
                        <h1 className="text-[25px] leading-[30px] sm:text-lg font-bold mb-2 text-center font-routhem tracking-widest w-[282px]">Follow Us on</h1>
                        <div className="flex space-x-3 mt-10 sm:mt-2 sm:space-x-2 items-center justify-center">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <BsFacebook className="text-white text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out transform hover:scale-125 " />
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                <AiFillTwitterCircle className="text-white text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out transform hover:scale-125" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="text-white text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out transform hover:scale-125" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <BsYoutube className="text-white text-4xl md:text-5xl lg:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='rocket'>
                    <a href="#" onClick={scrollToTop} className="cursor-pointer">
                        <img src="/images/Group 202.png" alt="Scroll to top" className="right-2 absolute top-0 sm:right-6 md:w-[90px] md:h-[150px] sm:w-[70px] sm:h-[100px] w-[70px] h-[100px]" />
                    </a>
                </div>
            </div>


            <div className="text-center bottom-0 left-0 right-0 bg-[#380D41] ">
                <p className="p-[39px] font-semibold text-[18px] text-white">COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
            </div>
        </>
    );
};

export default Footer;