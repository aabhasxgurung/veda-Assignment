"use client"
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './card.css';
import axios from 'axios';
import Image from 'next/image';

const CardItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/');
            setProducts(response.data.products.slice(4, 8));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    const handleLeftArrowClick = () => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const cardToMove = updatedCards.pop();
            updatedCards.unshift(cardToMove);
            return updatedCards;
        });
    };

    const handleRightArrowClick = () => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const cardToMove = updatedCards.shift();
            updatedCards.push(cardToMove);
            return updatedCards;
        });
    };

    return (
        <div id="card" className="w-full p-20 bg-[#380D41]">
            {products.length > 0 ? (
                <div className="absolute bottom-0 overflow-hidden position">
                    <div className="flex space-x-5 mt-[100px] sm:mt-[200px] sm:space-x-[112px]">
                        {products.map((product, index) => (
                            <Card
                                key={index}
                                productId={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading</p>
            )}
            <div className='sm:mt-0 mt-[270px]  flex'>
                <Image
                    src='/images/Vector.png'
                    loading='lazy'
                    className=' cursor-pointer flex-shrink-0 '
                    width={46.97}
                    height={46.97}
                    onClick={handleLeftArrowClick}
                />
                <Image
                    src='/images/Vector (1).png'
                    className='absolute right-0 mr-[117px] cursor-pointer flex flex-shrink-0 '
                    width={46.97}
                    height={46.97}
                    onClick={handleRightArrowClick}
                />
            </div>
        </div>
    );
};

export default CardItem;
