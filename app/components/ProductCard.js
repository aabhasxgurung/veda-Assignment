"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import './product.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import DropdownButton from './DropdownButton';

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div id="rubi" className="card-container">
            <DropdownButton selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-[36px] shadow-md p-4 w-[397px] h-[542px] mb-40"
                >
                    <div className="goldtext absolute font-medium text-[21px] gradient-text">
                        <p>{product.brand}</p>
                    </div>
                    <div className="flex justify-end">
                        <AiOutlineHeart size={35} />
                    </div>
                    <div className="text-center mt-10" id="product">
                        <div className="flex justify-center items-center">
                            <img
                                src={product.thumbnail}
                                alt=""
                                className="w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>
                        <h2 className="text-[36px] w-[312px] h-[55px] font-regular mt-10">
                            {truncateText(product.title, 20)}
                        </h2>
                        <div className="button-container">
                            <Link href={`/productDet/${product.id}`}>
                                <li className="button text-[25px] font-semibold h-[86px] rounded-full py-2 px-10 mt-12 transition-all duration-300 ease-in-out flex justify-between items-center border-product">
                                    <span>View</span>
                                    <BsArrowRightCircle size={47} />
                                </li>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;

