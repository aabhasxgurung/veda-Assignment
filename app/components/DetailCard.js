"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./detail.css"
import Image from 'next/image';

const DetailCard = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center gap-14">
            <div className="sm:w-[300px] sm:h-[391px] w-[242px] h-[316px] rounded-lg bg-white border-gold">
                <Image src={product.thumbnail} alt='' width={245} height={288} />
            </div>
            {/* <div className="w-[300px] h-[391px] rounded-lg bg-white border-gold">
                <Image src={product.thumbnail} alt='' width={245} height={288} />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white border-gold">
                <Image src={product.thumbnail} alt='' width={245} height={288} />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white border-gold">
                <Image src={product.thumbnail} alt='' width={245} height={288} />
            </div> */}
        </div>

    );
};

export default DetailCard;

