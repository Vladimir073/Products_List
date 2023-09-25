import { ProductCard } from '../card/product-card.component';
import { STitle } from '../../../assets/styles/app.styles';
import { ProductModel } from '../../../models/ProductModel';

export const ProductsList = ({ products }: { products: ProductModel[] }) => {
    return (
        <>
            <STitle>Products List</STitle>
            <ul>
                {products?.map(item => {
                    return <ProductCard key={item.id} {...item} />;
                })}
            </ul>
        </>
    );
};
