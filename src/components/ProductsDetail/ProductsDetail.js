import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductsDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(prdct => prdct.key === productKey);
    console.log(product);
    return (
        <div>
            <h1>Your Product Details below:</h1>
            <Product addToCartButton={false} product={product} ></Product>
        </div>
    );
};

export default ProductsDetail;