import { memo } from 'react';
import { ProductsList } from './products-list.component';
import { Loader } from '../../Loader';
import { ProductCreationContainer } from '../modal/product-creation.component';
import { useGetProductsQuery } from '../../../store/product/product.api';

export const ProductListContainer = memo(() => {
    const { isLoading, isError, data } = useGetProductsQuery('');

    if (isLoading) return <Loader />;
    if (isError) return <h1>Something went wrong...</h1>;
    return (
        <>
            <ProductsList products={data} />
            <ProductCreationContainer />
        </>
    );
});
