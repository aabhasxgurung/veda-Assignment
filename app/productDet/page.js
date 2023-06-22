"use client"
import React from 'react';
import { useRouter } from 'next/router';
import ProductDetails from '../modules/productDetails/ProductDetails';

const page = () => {
    const router = useRouter();
    const { productId } = router.query;
    console.log("productId", productId)
    return (
        <div>
            <ProductDetails productId={productId} />
        </div>
    );
};

export default page;
