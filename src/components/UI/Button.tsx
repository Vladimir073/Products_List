import { FC } from 'react';
import { SButton } from '../../assets/styles/app.styles';

interface IButton {
    innerClassName: string;
    children: string;
    onClick?: (e: any) => void;
}

export const Button: FC<IButton> = ({ onClick, innerClassName, children, ...rest }) => {
    return (
        <SButton className={innerClassName} onClick={onClick}>
            {children}
        </SButton>
    );
};
