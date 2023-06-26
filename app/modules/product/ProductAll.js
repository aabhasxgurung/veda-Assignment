"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';
import './product.css';
import Image from 'next/image';

const ProductAll = ({ selectedCategory, filterCategories }) => {

    const [products, setProducts] = useState([]);

    const filterData = products.filter(product => {
        return (
            product.category.includes(filterCategories)
        )
    })


    console.log(filterData)


    useEffect(() => {
        fetchProducts();
    }, [selectedCategory,]);

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
                            className="bg-white rounded-[36px] shadow-md sm:w-[397px] w-[325px] h-[445px] sm:h-[542px] sm:mb-32"
                        >
                            <div className="absolute font-medium text-[17px] sm:text-[21px] mt-4 ml-4 gradient-text">
                                <p>{product.brand}</p>
                            </div>
                            <div className="flex justify-end cursor-pointer mt-4 mr-2">
                                <AiOutlineHeart size={35} />
                            </div>
                            <div className="text-center mt-10" id="product">
                                <div className="flex justify-center items-center">
                                    <Image src={product.thumbnail} width={311} height={189} alt='' className="sm:w-[311px] w-[254px] sm:h-[189px] h-[154px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:overflow-hidden" />

                                </div>
                                <h2 className="sm:text-[34px] text-[29px] w-[312px] h-[55px] font-regular mt-5 sm:mt-10">
                                    {truncateText(product.title, 20)}
                                </h2>
                                <div className="button-container">
                                    <Link href={`/productDet/${product.id}`}>
                                        <li className="button text-[20px] sm:text-[25px] font-semibold w-[278px] sm:w-[340px] h-[70px] sm:h-[86px] rounded-full py-2 px-10 mt-8 sm:mt-12 transition-all duration-300 ease-in-out flex justify-between items-center border-product ml-[17px] sm:ml-[20px]">
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

export default ProductAll;
