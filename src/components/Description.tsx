import { FC, memo, useState, useEffect } from 'react';
import { MAX_LENGTH } from '../constants/maxLength.constants';
import { Button } from './UI/Button';

interface IDescription {
    text: string;
    maxLength?: number;
}
export const Description: FC<IDescription> = memo(({ text, maxLength = MAX_LENGTH }) => {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [newText, setNewText] = useState(text);

    useEffect(() => {
        if (text.length > maxLength && isActive) {
            setNewText(`${text.slice(0, maxLength)} ...`);
        } else {
            setNewText(text);
        }
    }, [isActive, text, maxLength]);

    function handleShowDescription() {
        setIsActive(!isActive);
    }

    return (
        <div>
            <p>{newText}</p>
            {text.length > maxLength && (
                <Button onClick={handleShowDescription} innerClassName='btn__show-desctiption'>
                    {isActive ? 'Show Details' : 'Hide Details'}
                </Button>
            )}
        </div>
    );
});
