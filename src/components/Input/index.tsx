import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';

import { InputProps } from './types';

import { Container, Icon, Separator } from './styles';

const Input: FC<InputProps> = ({
    type,
    className,
    icon,
    label,
    ...otherProps
}) => {
    if (!otherProps?.name) {
        return (
            <label className="errorLabel">Esperava receber um "name"!</label>
        );
    }

    const renderError = (message: string) => (
        <p className="is-danger">{message}</p>
    );

    const Input = () => (
        <Container>
            <Separator>
                <Icon>
                    <i className={`bx ${icon}`} aria-hidden="true" />
                </Icon>

                <Field
                    {...otherProps}
                    type={type}
                    className={`form-input ${className && className}`}
                    placeholder={label}
                    autoComplete="off"
                />
            </Separator>

            <ErrorMessage name={otherProps?.name || ''} render={renderError} />
        </Container>
    );

    return <Input />;
};

export default Input;
