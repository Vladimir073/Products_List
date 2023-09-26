import { memo, useEffect } from 'react';
import { ProductsList } from './products-list.component';
import { Loader } from '../../Loader';
import { ProductCreationContainer } from '../modal/product-creation.component';
import { useGetProductsQuery } from '../../../store/product/product.api';
import { PRODUCTS_LS_KEY } from '../../../constants/localstorage.key.constants';

export const ProductListContainer = memo(() => {
    const { isLoading, isError, data } = useGetProductsQuery('');

    useEffect(() => {
        localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(data));
    }, [data]);

    if (isLoading) return <Loader />;
    if (isError) return <h1>Something went wrong...</h1>;
    return (
        <>
            <ProductsList products={data} />
            <ProductCreationContainer />
        </>
    );
});
