"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownButton = ({ selectedCategory, onCategoryChange }) => {
    const [categories, setCategories] = useState([]);

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
        const category = event.target.value;
        onCategoryChange(category);
    };

    return (
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
                        paddingRight: '40px', // Adjust this value to increase/decrease the arrow size
                    }}
                >
                    <option value="">All Products</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DropdownButton;
