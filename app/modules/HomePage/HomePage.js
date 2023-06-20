import React from 'react';
import Card from '../../components/Card';
import "./home.css"
import HomeProduct from './HomeProduct';

const HomePage = () => {
    return (
        <div className="relative">
            <img
                src="/images/homebg.png"
                alt=""
                className="filter brightness-50 dark:brightness-50 h-3/4 w-full object-cover"
            />
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="font-routhem text-[60px] text-[#F903AA] shadow-md">LOGO ELECTRONICS</h1>
                <p className="font-routhem text-white text-[21px]  mb-16">THE TECHIES YOU LOVE</p>
                <button
                    style={{
                        backgroundImage: 'linear-gradient(to right, #920AA8, #E019CC, #FF81E3, #FC75D6, #DF55F6, #E822EC, #E80F91, #EE19D8, #F323B7, #FE3873 transparent, transparent)',
                    }}
                    className="font-routhem text-left border-[5px] text-[20px] rounded-full text-white transition-all duration-500 ease-in-out hover:scale-105  px-10 h-[82px] w-[483px] py-2 mt-4">
                    View All Products
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
