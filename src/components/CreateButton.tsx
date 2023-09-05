import { FC } from 'react';
import { SButton } from '../assets/styles/app.styles';

interface ICreateButton {
    openModal: () => void;
    innerClassName: string;
    children: string;
}

export const CreateButton: FC<ICreateButton> = ({ openModal, innerClassName, children }) => {
    return (
        <SButton onClick={openModal} className={innerClassName}>
            {children}
        </SButton>
    );
};
