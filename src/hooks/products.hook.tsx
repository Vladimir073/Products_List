import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectProducts } from '../store/product/product.selectors';
import { getProducts } from '../services/api/product-api.service';

export const useProducts = () => {
    const product = useSelector(selectProducts);
    const error = useSelector(selectError);
    const loading = useSelector(selectIsLoading);

    useEffect(() => {
        void getProducts();
    }, []);

    return { product, error, loading };
};
