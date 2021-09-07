import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';

import { validationSchema } from './validationSchema';
import { IFormValue } from './types';

import { saveDriver } from './utils';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { DataValueType } from '../../../contexts/AuthContext/types';

const Driver: FC = () => {
    const initialValues: IFormValue = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    async function handleSubmit(
        { name, email, password }: IFormValue,
        status: DataValueType,
    ) {
        const res = await saveDriver({ name, email, password });

        if (res) {
            toast.success('Driver inserido!');
            status(true);

            return;
        }

        toast.error('Erro ao inserir o Driver!');
        status(false);

        return;
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(
                { name, email, password },
                { setSubmitting, resetForm },
            ) => {
                setSubmitting(false);
                handleSubmit(
                    { name, email, password },
                    status => status && resetForm(),
                );
            }}
        >
            <Form>
                <Input
                    type="email"
                    name="email"
                    label="E-mail"
                    icon="bx bx-mail-send"
                />

                <Input type="text" name="name" label="Name" icon="bx bx-user" />

                <Input
                    type="password"
                    name="password"
                    label="Password"
                    icon="bx bx-lock-alt"
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    label="Confirm password"
                    icon="bx bx-lock-alt"
                />

                <Button
                    type="submit"
                    value="Salvar"
                    style={{ marginTop: '25px' }}
                />
            </Form>
        </Formik>
    );
};

export default Driver;
