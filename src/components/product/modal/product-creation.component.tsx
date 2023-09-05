import { FC, memo, useState } from 'react';
import { Modal } from '../../Modal';
import { ProductCreationForm } from '../form/product-creation.form';
import { CreateButton } from '../../CreateButton';
import { ProductModel } from '../../../models/ProductModel';
import { useDispatch } from 'react-redux';
import { setAddProduct } from '../../../store/product/product.slice';

export const ProductCreationContainer: FC = memo(() => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const dispatch = useDispatch();

    function handleSubmit(newProduct: ProductModel) {
        dispatch(setAddProduct(newProduct));
        setModalVisible(false);
    }

    function handleOpenModal() {
        setModalVisible(true);
    }

    function handleCloseModal() {
        setModalVisible(false);
    }

    return (
        <div>
            <CreateButton openModal={handleOpenModal} innerClassName='btn__open-modal'>
                +
            </CreateButton>
            <Modal title='Create Product' visible={modalVisible} onClose={handleCloseModal}>
                <ProductCreationForm createNewProduct={handleSubmit} isVisible={modalVisible} />
            </Modal>
        </div>
    );
});
