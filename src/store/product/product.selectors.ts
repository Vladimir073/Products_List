import { RootState } from '../store';
import { ProductStateModel } from '../../models/state/product-state.model';

const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) => state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;
export const selectError = (state: RootState) => selectProductState(state).error;
export const selectIsLoading = (state: RootState) => selectProductState(state).loading;
