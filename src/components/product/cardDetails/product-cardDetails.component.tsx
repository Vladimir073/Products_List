import { useParams } from 'react-router-dom';
import { useProducts } from '../../../hooks/products.hook';
import { useEffect, useState } from 'react';
import { ProductModel } from '../../../models/ProductModel';
import { Loader } from '../../Loader';

export const ProductDetails = () => {
    const { product, loading, error } = useProducts();
    const [detailsProduct, setDetailsProduct] = useState<ProductModel>();

    const { id } = useParams();

    useEffect(() => {
        const currentProduct = product.filter(item => item.id == id);
        setDetailsProduct(currentProduct[0]);
    }, [id, product]);

    if (loading) return <Loader />;
    return <>{detailsProduct && <h1>{detailsProduct.title}</h1>}</>;
};
