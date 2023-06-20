"use client"
import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';

const ProductCard = () => {
    return (
        <div className="bg-white rounded-[36px] shadow-md p-4 w-[397px] h-[542px]">
            <div className="flex justify-end">
                <AiOutlineHeart size={35} />
            </div>
            <div className="text-center mt-10">
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
                    style={{
                        background:
                            'linear-gradient(90deg, #920AA8 2%, #E019CC 20%, #FF81E3 48%, #FC75D6 52%, #DF55F6 60%, #E822EC 71%, #E80F91 75%, #EE19D8 81.25%, #F323B7 87.5%, #FE3873 100%)',
                    }}
                    className="text-[25px] rounded-full py-2 px-10 mt-12 transition-all duration-300 ease-in-out w-[340px] h-[86px] flex justify-between items-center border-product"
                >
                    View <BsArrowRightCircle size={47} />
                </button>
            </div>
        </div >
    );
};

export default ProductCard;
