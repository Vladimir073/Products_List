import { FC, memo, useCallback, useEffect, useState, MouseEvent } from 'react';
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';
import { ProductModel } from '../../../models/ProductModel';
import { SForm } from '../../../assets/styles/app.styles';
import { createNewProductApi } from '../../../services/api/createProduct-api.service';

interface IForm {
    createNewProduct: (product: ProductModel) => void;
    isVisible: boolean;
}

export const ProductCreationForm: FC<IForm> = memo(({ createNewProduct, isVisible }) => {
    const [disabled, setDisable] = useState<boolean>(false);
    const [valFromInput, setValFromInput] = useState<ProductModel>({ title: '', description: '', id: '' });
    const [error, setError] = useState<boolean>(false);

    const submitProduct = useCallback(
        async (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setDisable(true);
            if (valFromInput.title === '') {
                setDisable(false);
                setError(true);
                return;
            }
            const response = await createNewProductApi(valFromInput);
            setError(true);
            setDisable(false);
            createNewProduct(response);
            setValFromInput({ title: '', description: '', id: '' });
        },
        [createNewProduct, valFromInput]
    );

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
            {error && <div className='input-error'>Required. Title is not to be empty</div>}
            <Input
                valueInput={valFromInput.description}
                handleChange={(e: any) => setValFromInput({ ...valFromInput, description: e.target.value })}
                innerClassName='input'
                placeholder='description'
            />
            <Button onClick={submitProduct} innerClassName='btn__create-product' disabled={disabled}>
                Create
            </Button>
        </SForm>
    );
});
