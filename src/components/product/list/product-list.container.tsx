import { memo } from 'react';
import { ProductsList } from './products-list.component';
import { useProducts } from '../../../hooks/products.hook';
import { Loader } from '../../Loader';
import { ProductCreationContainer } from '../modal/product-creation.component';

export const ProductListContainer = memo(() => {
    const { product, error, loading } = useProducts();

    if (loading) return <Loader />;
    if (error) return <div>{error}</div>;
    return (
        <>
            <ProductsList products={product} />;
            <ProductCreationContainer />
        </>
    );
});
