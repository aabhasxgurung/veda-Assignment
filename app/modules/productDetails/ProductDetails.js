"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import DetailCard from '@/app/components/DetailCard';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import './prodDetail.css';
import Image from 'next/image';

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative">
            <Image src="/images/details.png" alt='' width={1920} height={3144} className="filter brightness-50 dark:brightness-50 h-[549px] w-full object-cover" />
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="font-routhem text-6xl text-[#F903AA] shadow-md">Product Details</h1>
            </div>
            <div className="flex items-center justify-center mt-[200px]">
                <h2 className="absolute left-1/2 font-normal text-5xl text-white transform -translate-x-1/2 sm:-tra">{product.title}</h2>
            </div>
            <div id='detail' className="bg-white rounded-lg shadow-md p-6 sm:mt-[200px] md:left-1/2 mt-[120px] w-[390px] sm:w-[1138px] h-[794px] sm:h-[436px] sm:ml-[391px] ml-[12px] gradient-border">
                <div className="flex flex-col sm:flex-row">
                    <div>
                        <Image src={product.thumbnail} alt={product.title} width={377} height={375} className="w-[377px] h-[375px]" />

                    </div>
                    <div className="w-2/3 pl-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-[54px]">{product.title}</h2>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500 flex text-xl font-bold mr-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-[16px] leading-[24px]">{product.description}</p>
                        <p className="text-[25px] mb-[10px]">Price: Rs {product.price}</p>
                        <p className="text-[25px]">Discount: {product.discountPercentage}%</p>
                    </div>
                </div>
            </div>
            <div className="mt-[119px] sm:ml-[119px]">
                <DetailCard productId={productId} />
            </div>
            <div className="flex mt-[118px] mb-60 ml-[49%] gap-[39px] font-semibol text-white">
                <BsArrowLeftCircle size={47} />
                <BsArrowRightCircle size={47} />
            </div>
        </div>
    );
};

export default ProductDetails;
