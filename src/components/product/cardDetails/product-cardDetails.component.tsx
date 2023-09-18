import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductModel } from '../../../models/ProductModel';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/product/product.selectors';
import { SProductDetails } from '../../../assets/styles/app.styles';

export const ProductDetails = () => {
    const [detailsProduct, setDetailsProduct] = useState<ProductModel>({ title: '', description: '', id: '' });

    const products = useSelector(selectProducts);
    const { id } = useParams();

    useEffect(() => {
        const currentProduct = products.filter(item => String(item.id) === id);
        setDetailsProduct(currentProduct[0]);
    }, [id, products]);

    return (
        <SProductDetails>
            <div className='wrapper'>
                {detailsProduct?.image ? (
                    <img className='product-detail__img' src={detailsProduct.image} alt='image_product' />
                ) : (
                    <img
                        className='product-detail__img'
                        src='https://via.placeholder.com/200x200/282c34/E0F6FD?text=No+Image'
                        alt=''
                    />
                )}
                <div className='main-information'>
                    <p className='category'>
                        Category: {detailsProduct?.category ? detailsProduct.category : `Not information`}
                    </p>
                    <h1>{detailsProduct?.title}</h1>
                    <p className='price'>Price: {detailsProduct?.price ? `${detailsProduct.price}$` : `0$`}</p>
                    <p className='rating'>
                        Rating: {detailsProduct?.rating?.rate ? detailsProduct.rating.rate : `Not information`} / 5{' '}
                    </p>
                    <p className='count'>
                        Count: {detailsProduct?.rating?.count ? detailsProduct.rating.count : `Not information`}
                    </p>
                    <h3>Description: {detailsProduct?.description}</h3>
                </div>
            </div>
        </SProductDetails>
    );
};
