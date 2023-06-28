"use client"
import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./card.css"
import axios from 'axios';

const CardItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/');
            setProducts(response.data.products.slice(0, 4));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div id='card' className='w-full p-20 bg-[#380D41]'>
            {products.length > 0 ? (
                <div className="absolute bottom-0 overflow-hidden position">
                    <div className="flex space-x-5 mt-[100px] sm:mt-[200px] sm:space-x-[112px]">
                        {products.map((product, index) => (
                            <Card
                                key={index}
                                productId={product.id}
                                thumbnail={product.thumbnail}
                                size={product.size}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};

export default CardItem;
