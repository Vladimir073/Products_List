/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useState, useMemo } from 'react';
import { MAX_LENGTH } from '../constants/maxLength.constants';
import { Button } from './UI/Button';

interface IDescription {
    text: string;
    maxLength?: number;
}
export const Description: FC<IDescription> = memo(({ text, maxLength = MAX_LENGTH }) => {
    const [isActive, setIsActive] = useState<boolean>(true);

    function handleShowDescription() {
        setIsActive(!isActive);
    }

    function handleShowText(text: string): string {
        if (text.length > maxLength && isActive) {
            return `${text.slice(0, maxLength)} ...`;
        } else {
            return text;
        }
    }

    const handlerShowText = useMemo(() => handleShowText(text), [text, isActive]);

    return (
        <div>
            <p>{handlerShowText}</p>
            {text.length > maxLength && (
                <Button onClick={handleShowDescription} innerClassName='btn__show-description'>
                    {isActive ? 'Show Details' : 'Hide Details'}
                </Button>
            )}
        </div>
    );
});
