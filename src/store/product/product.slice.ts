import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/ProductModel';

const initialState: ProductStateModel = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction(state, { payload }: PayloadAction<ProductModel[]>) {
            state.products = payload;
        },
        setErrorAction(state, { payload }: PayloadAction<string>) {
            state.error = payload;
        },
        setLoadingAction(state, { payload }: PayloadAction<boolean>) {
            state.loading = payload;
        },
        setAddProduct(state, { payload }: PayloadAction<ProductModel>) {
            state.products.unshift(payload);
        },
    },
});

export default productSlice.reducer;
export const { setProductsAction, setErrorAction, setLoadingAction, setAddProduct } = productSlice.actions;
