import React from 'react'

import ProductDetails from '@/app/modules/productDetails/ProductDetails';
const Detail = ({ params }) => {
    const productId = params.id

    return (
        <div>
            <ProductDetails productId={productId} />

        </div>
    )
}

export default Detail