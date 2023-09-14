import axios, { AxiosError } from 'axios';
import { PRODUCTS_URL } from '../../constants/api.constants';
import { ProductModel } from '../../models/ProductModel';
import { setErrorAction, setLoadingAction, setProductsAction } from '../../store/product/product.slice';
import { store } from '../../store/store';

export async function getProducts(): Promise<ProductModel[] | undefined> {
    store.dispatch(setLoadingAction(true));
    try {
        const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
        store.dispatch(setProductsAction(response.data));
        return response.data;
    } catch (error: unknown | AxiosError) {
        if (axios.isAxiosError(error)) {
            store.dispatch(setErrorAction(`Something went wrong! Error: ${error.message}`));
        } else {
            console.error(error);
        }
    } finally {
        store.dispatch(setLoadingAction(false));
    }
}
