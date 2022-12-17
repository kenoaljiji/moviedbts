import React from 'react';

interface Props {
    click: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color: string;
    value: string;
}

const Button: React.FC<Props> = ({ click, color, value }) => {
    return (
        <button onClick={click} className={color}>
            {value}
        </button>
    );
};

export default Button;
