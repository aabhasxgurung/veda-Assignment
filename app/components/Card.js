"use client"
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import './card.css';

const Card = () => {
    const [products, setProducts] = useState([1, 2, 3, 4]);


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products.slice(0, 1));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    const filledStars = Math.round(products.rating);
    const thumbnails = Array(4).fill(products.thumbnail);

    return (
        <div id='card' className="w-[200px] sm:w-[300px] h-[255px] sm:h-[391px] bg-white p-6 shadow-md border-4 gradient-border">
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <img src={product.thumbnail} alt="Product Image" className={product.size} />
                        <p className="text-black font-semibold md:font-bold md:text-[25px] mt-4 ">{product.title}</p>
                        <p className="text-[#0A0A0A] text-[13px] md:text-[20px] md:mt-[8.6px]">{product.description}</p>
                        <p className="text-black text-[12px] md:text-[25px] font-semibold mt-[10.85px]">${product.price}</p>
                        <div className="flex text-[12px] md:text-[25px] items-center mb-4">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} color={index < filledStars ? '#ffc107' : '#c4c4c4'} />
                            ))} <div className=' ml-5 text-gray-500 text-[12px] md:text-[20px]'>({product.stock})</div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};

export default Card;
