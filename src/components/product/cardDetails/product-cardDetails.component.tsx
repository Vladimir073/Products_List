import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductModel } from '../../../models/ProductModel';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/product/product.selectors';

export const ProductDetails = () => {
    const [detailsProduct, setDetailsProduct] = useState<ProductModel>();

    const products = useSelector(selectProducts);
    const { id } = useParams();

    useEffect(() => {
        const currentProduct = products.filter(item => String(item.id) === id);
        setDetailsProduct(currentProduct[0]);
    }, [id, products]);

    return <>{detailsProduct && <h1>{detailsProduct.title}</h1>}</>;
};
