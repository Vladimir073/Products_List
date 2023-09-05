import { memo, FC } from 'react';
import { ProductModel } from '../../../models/ProductModel';
import { SItem } from '../../../assets/styles/app.styles';
import { Description } from '../../Description';

export const ProductCard: FC<ProductModel> = memo(({ title, description, image, price, ...props }) => {
    return (
        <SItem>
            <div className='wrapper-img'>
                {image ? (
                    <img className='product-img' src={image} alt={title} />
                ) : (
                    <img
                        className='product-img'
                        src='https://via.placeholder.com/200x200/282c34/E0F6FD?text=Not+Image'
                        alt=''
                    ></img>
                )}
            </div>
            <div className='product-info'>
                <div className='product-info__title'>
                    <h2>{title}</h2>
                    <p>
                        Price: <span>{price ? `${price}$` : <>0$</>}</span>
                    </p>
                </div>
                <p className='product-info__category'>
                    Category: {props.category ? props.category : <>Not information</>}
                </p>
                <Description text={description} />
            </div>
        </SItem>
    );
});
