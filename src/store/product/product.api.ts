import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PRODUCTS_URL } from '../../constants/api.constants';

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_URL }),
    endpoints: build => ({
        getProducts: build.query({
            query: () => ({
                url: '',
                params: {},
            }),
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
