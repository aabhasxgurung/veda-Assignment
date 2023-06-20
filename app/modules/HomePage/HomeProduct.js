
import React from 'react';
import ProductCard from '../../components/ProductCard';


const HomeProduct = () => {
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
    ];

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-[60px] font-routhem text-[#F903AA] font-bold mb-28">Products</h1>
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
    );
};

export default HomeProduct;
