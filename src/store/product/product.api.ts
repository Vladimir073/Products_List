import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PRODUCTS_URL } from '../../constants/api.constants';
import { ProductModel } from '../../models/ProductModel';

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
        getDetailsProduct: build.query<ProductModel, string>({
            query: (id: string) => ({
                url: id,
            }),
        }),
        createProduct: build.mutation({
            query: patch => ({
                url: '',
                method: 'Post',
                body: { ...patch },
            }),
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation, useGetDetailsProductQuery } = productApi;
