import { ChangeEvent, FC, ReactNode } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';
import { SModal, SModalWrapper } from '../assets/styles/app.styles';

interface IModal {
    title: string;
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
}

export const Modal: FC<IModal> = ({ title, visible, onClose, children }) => {
    return (
        <SModal className={visible ? 'modal active' : 'modal'} onClick={onClose}>
            <SModalWrapper
                className={visible ? 'modal-content active' : 'modal-content'}
                onClick={(e: ChangeEvent) => e.stopPropagation()}
            >
                <header>
                    <h2>{title}</h2>
                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </header>
                {children}
            </SModalWrapper>
        </SModal>
    );
};
