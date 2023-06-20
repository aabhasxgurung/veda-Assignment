import ProductCard from '@/app/components/ProductCard';
import React from 'react'

const ProductAll = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 4,
            name: 'Product 4',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 5,
            name: 'Product 5',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 6,
            name: 'Product 6',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 7,
            name: 'Product 7',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 8,
            name: 'Product 8',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },
        {
            id: 9,
            name: 'Product 9',
            price: '$99',
            imageSrc: 'images/p2 1.png',
        },

    ];
    return (
        <div className="flex flex-col items-center mt-8">
            <div className="grid grid-cols-3 gap-20">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        imageSrc={product.imageSrc}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductAll