import React from 'react';
import Card from '../../components/Card';
import "./home.css"
import HomeProduct from './HomeProduct';
import { BsArrowRightCircle } from 'react-icons/bs';

const HomePage = () => {
    return (
        <div id='main' className="relative">
            <img
                src="/images/homebg.png"
                alt=""
                className="filter brightness-50 dark:brightness-50 h-3/4 w-full object-cover"
            />
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="font-routhem text-[60px] text-[#F903AA] shadow-md">LOGO ELECTRONICS</h1>
                <p className="font-routhem text-white text-[21px]  mb-16">THE TECHIES YOU LOVE</p>
                <button
                    className="font-routhem flex items-center justify-between ml-[80px]  border-[5px] text-[20px] rounded-full text-white transition-all duration-500 ease-in-out hover:scale-105  px-10 h-[82px] w-[483px] py-2 mt-4">
                    View All Products
                    <BsArrowRightCircle size={47} />
                </button>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 ">
                <div className="flex gap-[112px]">
                    <Card
                        imageSrc="/images/alienware.png"
                        name="Alienware"
                        description="Alienware Description"
                        price="$200"
                    />
                    <Card
                        imageSrc="/images/p11 1.png"
                        name="Keyboard"
                        description="AZERTY Keyboard"
                        price="$300"

                    />
                    <Card
                        imageSrc="/images/p9 1.png"
                        name="Desktop"
                        description="AZERTY Desktop"
                        price="$250"
                    />
                    <Card
                        imageSrc="/images/p8 1.png"
                        name="Headphone"
                        description="Wireless Headphone"
                        price="$250"
                    />
                </div>
            </div>
        </div>


    );
};

export default HomePage;
