import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';

import { validationSchema } from './validationSchema';
import { DriverProps, IFormValue } from './types';

import { saveDriver } from './utils';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { DataValueType } from '../../../contexts/AuthContext/types';

import { ListButtons } from './styles';

const Driver: FC<DriverProps> = ({ whatRender = () => {} }) => {
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
            toast.success('Sucess!');

            whatRender(0);
            status(true);

            return;
        }

        toast.error('Error!');
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

                <ListButtons>
                    <Button
                        type="button"
                        value="Back"
                        style={{ marginTop: '25px' }}
                        onClick={() => whatRender(0)}
                    />

                    <Button
                        type="submit"
                        value="Save"
                        style={{
                            marginTop: '25px',
                            justifyContent: 'flex-end',
                        }}
                    />
                </ListButtons>
            </Form>
        </Formik>
    );
};

export default Driver;
