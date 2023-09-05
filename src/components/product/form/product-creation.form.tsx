import { FC, memo, useEffect, useState } from 'react';
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';
import { ProductModel } from '../../../models/ProductModel';
import { SForm } from '../../../assets/styles/app.styles';
import { createNewProductApi } from '../../../services/api/product-api.service';

interface IForm {
    createNewProduct: (product: ProductModel) => void;
    isVisible: boolean;
}

export const ProductCreationForm: FC<IForm> = memo(({ createNewProduct, isVisible }) => {
    const [valFromInput, setValFromInput] = useState<ProductModel>({ title: '', description: '' });
    const [error, setError] = useState<boolean>(false);

    function submitProduct(e: any) {
        e.preventDefault();
        if (valFromInput.title === '') {
            setError(true);
            return;
        }
        createNewProductApi(valFromInput);
        setError(false);
        createNewProduct({ id: Number(Date.now()), title: valFromInput.title, description: valFromInput.description });
        setValFromInput({ title: '', description: '' });
    }

    useEffect(() => {
        if (!isVisible) {
            setError(false);
        }
    }, [isVisible]);

    return (
        <SForm>
            <Input
                valueInput={valFromInput.title}
                handleChange={(e: any) => setValFromInput({ ...valFromInput, title: e.target.value })}
                innerClassName={error ? 'input error' : 'input'}
                placeholder='title'
            />
            <div>{error ? <div className='input-error'>Requiret. Title is not to be empty</div> : <div></div>}</div>
            <Input
                valueInput={valFromInput.description}
                handleChange={(e: any) => setValFromInput({ ...valFromInput, description: e.target.value })}
                innerClassName='input'
                placeholder='decription'
            />
            <Button onClick={submitProduct} innerClassName='btn__create-product'>
                Create
            </Button>
        </SForm>
    );
});
