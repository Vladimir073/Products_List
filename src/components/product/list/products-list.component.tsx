import { ProductCard } from '../card/product-card.component';
import { STitle } from '../../../assets/styles/app.styles';
import { FC } from 'react';
import { ProductStateModel } from '../../../models/state/product-state.model';

export const ProductsList: FC<ProductStateModel> = ({ products }) => {
    return (
        <>
            <STitle>Products List</STitle>
            <ul>
                {products.map(item => {
                    return <ProductCard key={item.id} {...item} />;
                })}
            </ul>
        </>
    );
};
