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

    console.log(detailsProduct);

    useEffect(() => {
        const currentProduct = products.filter(item => String(item.id) === id);
        setDetailsProduct(currentProduct[0]);
    }, []);

    return (
        <SProductDetails>
            <div className='wrapper'>
                <img src={detailsProduct.image} className='product-detail__img' alt='photo_product' />
                <div className='main-information'>
                    <p>Category: {detailsProduct.category ? detailsProduct.category : `Not information`}</p>
                    <h1>{detailsProduct.title}</h1>
                    <p>Price: {detailsProduct.price ? `${detailsProduct.price}$` : `0$`}</p>
                    <p>Rating: {detailsProduct.rating?.rate ? detailsProduct.rating.rate : `Not information`} / 5 </p>
                    <p>Count: {detailsProduct.rating?.count ? detailsProduct.rating.count : `Not information`}</p>
                    <h3>{detailsProduct.description}</h3>
                </div>
            </div>
        </SProductDetails>
    );
};
