"use client"
import React, { useState, useEffect } from 'react';
import ProductAll from './ProductAll'
import axios from 'axios';
import Image from 'next/image';


const Productcomp = ({ selectedCategory, onCategoryChange }) => {
    const [categories, setCategories] = useState([]);
    const [filterCategories, setFilterCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        setFilterCategories(selectedValue);
    };





    return (
        <div className='relative'>
            <Image src="/images/homebg.png" alt='' width={1920} height={3774} className="filter brightness-50 dark:brightness-50 h-[549px] w-full object-cover" />

            <div className='absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className="font-routhem text-[60px] text-[#F903AA] wrap shadow-md">PRODUCTS</h1>
            </div>
            <div className='flex p-10 sm:justify-between justify-center flex-col sm:flex-row items-center mt-20 mb-36'>
                <h1 className='text-[32px] font-semibold text-white mb-12 capitalize'>{filterCategories.length > 0 ? `>> ${filterCategories}` : '>> All Products'}</h1>
                {/* <DropdownButton /> */}
                <div>
                    <div
                        className="dropdown-container"
                        style={{
                            maxHeight: '100px', // Adjust the max height as needed
                            overflowY: 'auto',
                        }}
                    >
                        <select
                            value={selectedCategory}
                            onChange={handleSelectChange}
                            className="bg-white py-2 px-4 rounded-full cursor-pointer w-[316px] h-[88px] text-[32px] items-center font-semibold appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 8l4 4 4-4H6z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
                                backgroundSize: '24px',
                                backgroundPosition: 'right 10px center',
                                backgroundRepeat: 'no-repeat',
                                paddingRight: '40px',
                            }}
                        >
                            <option value="" className='item-center justify-center text-center'>All Products</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <ProductAll selectedCategory={selectedCategory} filterCategories={filterCategories} />

        </div>
    )
}

export default Productcomp