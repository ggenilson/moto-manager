import React, { FC } from 'react';

import { ButtonProps } from './types';

import { Container } from './styles';

const Button: FC<ButtonProps> = ({
    value = '',
    style,
    type,
    disabled,
    onClick = () => {},
}) => (
    <Container style={style}>
        <button
            type={type}
            onClick={() => !disabled && onClick()}
            disabled={disabled}
        >
            {value}
        </button>
    </Container>
);

export default Button;
