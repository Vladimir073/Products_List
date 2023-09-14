import axios from 'axios';
import { ProductModel } from '../../models/ProductModel';
import { setLoadingAction } from '../../store/product/product.slice';
import { store } from '../../store/store';

export async function createNewProductApi(product: ProductModel): Promise<ProductModel> {
    store.dispatch(setLoadingAction(true));
    try {
        const postAxios = await axios.post('https://fakestoreapi.com/products', product);
        return postAxios.data;
    } finally {
        store.dispatch(setLoadingAction(false));
    }
}
