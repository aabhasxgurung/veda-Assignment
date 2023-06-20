"use client"
import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';

const ProductCard = () => {
    return (
        <div className="bg-white rounded-[36px] shadow-md p-4 w-[397px] h-[542px]">
            <div className='goldtext absolute font-medium text-[21px] gradient-text'>
                <p>
                    RUBI-128k
                </p>
            </div>
            <div className="flex justify-end">
                <AiOutlineHeart size={35} />
            </div>
            <div className="text-center mt-10" id='product'>
                <div className="flex justify-center items-center">
                    <img
                        src="/images/p2 1.png"
                        alt=""
                        className="w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <h2 className="text-[36px] w-[312px] h-[55px] font-regular mt-10">
                    Headphone-128K
                </h2>
                <button
                    className="button text-[25px] rounded-full py-2 px-10 mt-12 transition-all duration-300 ease-in-out w-[340px] h-[86px] flex justify-between items-center border-product"
                >
                    View <BsArrowRightCircle size={47} />
                </button>
            </div>
        </div >
    );
};

export default ProductCard;
