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
    const [isFilled, setIsFilled] = useState(false); // Add isFilled state

    useEffect(() => {
        // Fetch the product data when the component mounts
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
            // Make an HTTP GET request to the API endpoint
            const response = await axios.get('https://dummyjson.com/products');

            // Set the fetched product data in the state
            setProducts(response.data.products.slice(0, 6)); // Display only the first 6 products
        } catch (error) {
            // Handle error if request fails
            console.error('Error fetching products:', error);
        }
    };

    const handleClick = () => {
        setIsFilled(!isFilled);
    };

    return (
        <div id='rubi' className="flex flex-col items-center mt-6">
            <h1 className="sm:text-[60px] text-[45px] font-routhem text-[#F903AA] font-bold mt-[50px] mb-14 uppercase trracking-widest">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[36px] shadow-md p-4 sm:w-[397px] w-[325px] h-[445px] sm:h-[542px] sm:mb-32"
                        >
                            <div className="absolute font-medium text-[17px] sm:text-[21px] mt-4 ml-4 gradient-text">
                                <p>{product.brand}</p>
                            </div>

                            <div className="flex justify-end cursor-pointer mt-4">
                                {isFilled ? (
                                    <AiFillHeart
                                        size={35}
                                        style={{ color: 'red' }}
                                        onClick={handleClick}
                                    />
                                ) : (
                                    <AiOutlineHeart
                                        size={35}
                                        style={{ color: 'black' }}
                                        onClick={handleClick}
                                    />
                                )}
                            </div>
                            <div className="text-center mt-10" id="product">
                                <div className="flex justify-center items-center">
                                    <Image src={product.thumbnail} alt='' width={311} height={189} className='sm:w-[311px] w-[254px] sm:h-[189px] h-[154px] transition-all duration-300 ease-in-out transform hover:scale-105' />
                                    {/* <img
                                        src={product.thumbnail}
                                        alt=""
                                        className="w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105"
                                    /> */}
                                </div>
                                <h2 className="sm:text-[34px] text-[29px] w-[312px] h-[55px] font-regular mt-2 sm:mt-10 text-black">
                                    {truncateText(product.title, 15)}
                                </h2>

                                <div className="button-container">
                                    <Link href={`/productDet/${product.id}`}>
                                        <li className="button text-[20px] sm:text-[25px] font-semibold h-[70px] sm:h-[86px] rounded-full py-2 px-10 sm:mt-12 transition-all duration-300 ease-in-out flex justify-between items-center border-product">
                                            <span>View</span>
                                            <BsArrowRightCircle size={47} />
                                        </li>
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
