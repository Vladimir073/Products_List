import { FC, MouseEvent } from 'react';
import { SButton } from '../../assets/styles/app.styles';

interface IButton {
    innerClassName: string;
    children: string;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButton> = ({ onClick, innerClassName, children, disabled, ...rest }) => {
    return (
        <SButton className={innerClassName} onClick={onClick} disabled={disabled}>
            {children}
        </SButton>
    );
};
