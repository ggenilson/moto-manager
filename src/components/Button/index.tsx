import React, { FC } from 'react';

import { ButtonProps } from './types';

import { Container } from './styles';

const Button: FC<ButtonProps> = ({
    value = '',
    style,
    type,
    onClick = () => {},
}) => (
    <Container style={style}>
        <button type={type} onClick={() => onClick()}>
            {value}
        </button>
    </Container>
);

export default Button;
