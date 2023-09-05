import { FC } from 'react';
import { SInput } from '../../assets/styles/app.styles';

interface IInput {
    innerClassName: string;
    placeholder: string;
    valueInput: string;
    defaultValue?: string;
    handleChange: (val: string) => void;
    // getInput: (val: string) => void;
}

export const Input: FC<IInput> = ({ valueInput, handleChange, defaultValue, innerClassName, ...rest }) => {
    return <SInput value={valueInput} onChange={handleChange} className={innerClassName} {...rest} />;
};
