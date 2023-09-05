import { ProductModel } from '../ProductModel';

export interface ProductStateModel {
    products: ProductModel[];
    loading?: boolean;
    error?: string;
}
