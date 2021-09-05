import React, { FC } from 'react';

import { ButtonProps } from './types';

import { Container } from './styles';

const Button: FC<ButtonProps> = ({ value = '' }) => (
    <Container>
        <button>{value}</button>
    </Container>
);

export default Button;
