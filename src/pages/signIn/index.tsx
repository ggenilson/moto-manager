import React, { FC } from 'react';
import { Formik, Form } from 'formik';

import Input from '../../components/Input';
import { ILoginFormValue } from './types';

import { Container, Content } from './styles';

const SignIn: FC = () => {
    const initialValues: ILoginFormValue = { email: '', password: '' };

    return (
        <Container>
            <Content>
                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={({ email, password }, { setSubmitting }) => {
                        setSubmitting(false);
                        // handleSignIn({ username, password });
                    }}
                >
                    <Form>
                        <Input
                            type="text"
                            name="email"
                            label="email"
                            icon="bx bx-mail-send"
                        />

                        <Input
                            type="password"
                            name="password"
                            label="password"
                            icon="bx bx-mail-send"
                        />
                    </Form>
                </Formik>
            </Content>
        </Container>
    );
};

export default SignIn;
