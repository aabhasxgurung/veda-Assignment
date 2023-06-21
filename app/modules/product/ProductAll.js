import ProductCard from '@/app/components/ProductCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductAll = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch the product data when the component mounts
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Make an HTTP GET request to the API endpoint
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products)
            // Set the fetched product data in the state
            setProducts(response.data.products);
        } catch (error) {
            // Handle error if request fails
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="grid grid-cols-3 gap-20">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            imageSrc={product.imageSrc}
                            price={product.price}
                        />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default ProductAll;
