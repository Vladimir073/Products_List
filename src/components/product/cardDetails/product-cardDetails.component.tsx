import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductModel } from '../../../models/ProductModel';
import { SLoader, SProductDetails } from '../../../assets/styles/app.styles';
import { PRODUCTS_LS_KEY } from '../../../constants/localstorage.key.constants';
import { useGetDetailsProductQuery } from '../../../store/product/product.api';

export const ProductDetails = () => {
    const { id } = useParams<{ id: any }>();
    const { data: product, isLoading } = useGetDetailsProductQuery(id);
    console.log(product);

    if (isLoading) {
        return <SLoader />;
    }

    return (
        <SProductDetails>
            <div className='wrapper'>
                {product?.image ? (
                    <img className='product-detail__img' src={product.image} alt='image_product' />
                ) : (
                    <img
                        className='product-detail__img'
                        src='https://via.placeholder.com/200x200/282c34/E0F6FD?text=No+Image'
                        alt=''
                    />
                )}
                <div className='main-information'>
                    <p className='category'>Category: {product?.category ? product.category : `Not information`}</p>
                    <h1>{product?.title}</h1>
                    <p className='price'>Price: {product?.price ? `${product.price}$` : `0$`}</p>
                    <p className='rating'>
                        Rating: {product?.rating?.rate ? product.rating.rate : `Not information`} / 5{' '}
                    </p>
                    <p className='count'>Count: {product?.rating?.count ? product.rating.count : `Not information`}</p>
                    <h3>Description: {product?.description}</h3>
                </div>
            </div>
        </SProductDetails>
    );
};
