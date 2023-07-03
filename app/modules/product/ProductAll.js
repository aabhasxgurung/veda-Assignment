"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';
import './product.css';
import Image from 'next/image';

const ProductAll = ({ selectedCategory, filterCategories }) => {
    const [products, setProducts] = useState([]);

    const filterData = products.filter((product) => {
        return product.category.includes(filterCategories);
    });

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

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const allProducts = response.data.products;
            if (selectedCategory) {
                const filteredProducts = allProducts.filter((product) => product.category === selectedCategory);
                setProducts(filteredProducts);
            } else {
                setProducts(allProducts);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (

        <div id='rubi' className="flex flex-col items-center mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                {filterData.length > 0 ? (

                    filterData.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[36px] shadow-md p-4 md:w-[397px] w-[325px] h-[445px] md:h-[542px] sm:mb-32"
                        >
                            <div className="absolute font-medium text-[17px] md:text-[21px] mt-4 ml-6 gradient-text">
                                <p>{product.brand}</p>
                            </div>

                            <div
                                className="flex justify-end cursor-pointer mt-4 mr-2"
                                onClick={() => handleHeartClick(product.id)}
                            >
                                {product.isHearted ? (
                                    <AiFillHeart size={35} color='red' />
                                ) : (
                                    <AiOutlineHeart size={35} />
                                )}
                            </div>
                            <div className="text-center mt-10" id="product">
                                <div className="flex justify-center items-center">
                                    <Image src={product.thumbnail} alt='' width={311} height={189} className='md:w-[311px] w-[254px] md:h-[189px] h-[154px] transition-all duration-300 ease-in-out transform hover:scale-105' />
                                    {/* <img
                                        src={product.thumbnail}
                                        alt=""
                                        className="w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105"
                                    /> */}
                                </div>
                                <h2 className="md:text-[34px] text-[29px] w-[312px] h-[55px] font-regular mt-2 md:mt-10 text-black">
                                    {truncateText(product.title, 15)}
                                </h2>

                                <div className="flex items-center justify-center mt-4">
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

export default ProductAll;