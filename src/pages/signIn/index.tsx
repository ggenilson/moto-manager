import React, { FC } from 'react';
// import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import Input from '../../components/Input';
import { ILoginFormValue } from './types';

import { Container, Content } from './styles';

const SignIn: FC = () => {
    const initialValues: ILoginFormValue = { email: '', password: '' };
    // const validationSchema = Yup.object({
    //     username: Yup.string().required('Campo obrigatório*'),
    //     password: Yup.string().required('Campo obrigatório*'),
    // });

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
                        <h1>SIGN IN</h1>

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
                            icon="bx bx-lock-alt"
                        />
                    </Form>
                </Formik>
            </Content>
        </Container>
    );
};

export default SignIn;
