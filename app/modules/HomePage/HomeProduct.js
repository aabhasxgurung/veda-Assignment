"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import './home.css';
import Image from 'next/image';

const HomeProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');

            setProducts(response.data.products.slice(0, 6));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleHeartClick = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        isHearted: !product.isHearted,
                    };
                }
                return product;
            })
        );
    };

    return (
        <div id='rubi' className="flex flex-col items-center mt-6">
            <h1 className="sm:text-[60px] text-[45px] font-routhem text-[#F903AA] font-bold sm:mt-[150px] mt-[20px] mb-14 uppercase text-wrapper trracking-widest">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-16">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[36px] shadow-md p-4 lg:w-[397px] w-[325px] h-[445px] lg:h-[542px] sm:mb-10"
                        >
                            <div className="absolute font-medium text-[17px] lg:text-[21px] mt-4 ml-6 gradient-text">
                                <p>{product.brand}</p>
                            </div>

                            <div
                                className="flex justify-end cursor-pointer mt-4 mr-2"
                                onClick={() => handleHeartClick(product.id)}
                            >
                                {product.isHearted ? (
                                    <AiFillHeart size={30} color='red' />
                                ) : (
                                    <AiOutlineHeart size={30} />
                                )}
                            </div>
                            <div className="text-center mt-10" id="product">
                                <div className="flex justify-center items-center">
                                    <Image src={product.thumbnail} alt='' width={311} height={189} className='lg:w-[311px] w-[254px] lg:h-[189px] h-[154px] transition-all duration-300 ease-in-out transform hover:scale-105' />
                                </div>
                                <h2 className="lg:text-[34px] text-[29px] w-[312px] h-[55px] font-regular mt-2 lg:mt-10 text-black">
                                    {truncateText(product.title, 15)}
                                </h2>

                                <div className="flex items-center justify-center mt-2 ">
                                    <Link href={`/products/${product.id}`}>
                                        <button className='text-left sm:text-[20px] px-10 gradientLink flex justify-between items-center '>
                                            <div className='gradientLinkOverlay'>

                                            </div>
                                            <span className='text-[20px] font-semibold ml-5'>View </span>
                                            <BsArrowRightCircle size={47} className='w-[32px] h-[32px] md:w-[46.97px] md:h-[46.97px] ml-[46px] absolute top-[50%] -translate-y-1/2 right-4' />

                                        </button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default HomeProduct;