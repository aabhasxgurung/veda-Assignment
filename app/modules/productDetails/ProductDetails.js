import React from 'react';
import { FaStar } from 'react-icons/fa';
import DetailCard from '@/app/components/DetailCard';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import "./prodDetail.css"

const ProductDetails = () => {
    return (
        <div className="relative ">
            <img src="/images/details.png" alt="" />
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="font-routhem text-6xl text-[#F903AA] shadow-md">Product Details</h1>
            </div>
            <div>
                <h2 className="absolute left-[734px] font-normal text-5xl text-white mt-[98px]">
                    HEADPHONE-128K
                </h2>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-[300px] w-[1138px] h-[436px] ml-[391px]">
                <div className="flex">
                    <div className="">
                        <img src="/images/headphone.png" alt="Headphones" className="w-[377px] h-[375px]" />
                    </div>
                    <div className="w-2/3 pl-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-[54px]">Headphone-128k</h2>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500 flex text-xl font-bold mr-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-[16px] leading-[24px] ">
                            Headphone is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </p>
                        <p className='text-[25px] mb-[10px]'>Price: Rs 750</p>
                        <p className='text-[25px]'>Discount: 10%</p>
                    </div>
                </div>
            </div>
            <div className="mt-[119px] ml-[119px]">
                <DetailCard />
            </div>
            <div className='flex mt-[118px] mb-60 ml-[49%] gap-[39px] font-semibol text-white'>
                <BsArrowLeftCircle size={47} />
                <BsArrowRightCircle size={47} />
            </div>
        </div>
    );
};

export default ProductDetails;
