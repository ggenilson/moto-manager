import React, { FC } from 'react';

import { ButtonProps } from './types';

import { Container } from './styles';

const Button: FC<ButtonProps> = ({ value = '', style, type }) => (
    <Container style={style}>
        <button type={type}>{value}</button>
    </Container>
);

export default Button;
