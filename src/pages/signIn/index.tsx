import React, { FC, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { parseCookies } from 'nookies';
import { Formik, Form } from 'formik';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AuthContext } from '../../contexts';

import { ILoginFormValue, SignInProps } from './types';

import { validationSchema } from './validationSchema';

import { Container, Content } from './styles';

const SignIn: FC<SignInProps> = () => {
    const initialValues: ILoginFormValue = { email: '', password: '' };
    const { signIn } = useContext(AuthContext);
    const Router = useHistory();

    async function handleSignIn(data: ILoginFormValue) {
        try {
            await signIn(data, res => res && Router.push('/dashboard'));
        } catch (e) {
            console.log('Error: ', e);
            toast.error('Usuário ou senha errada!');
        }
    }

    useEffect(() => {
        const { '@moto-user-auth-token': token } = parseCookies();

        if (token) {
            Router.push('/dashboard');
        }
    }, []);

    return (
        <Container>
            <Content>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={({ email, password }, { setSubmitting }) => {
                        setSubmitting(false);
                        handleSignIn({ email, password });
                    }}
                >
                    <Form>
                        <h1>SIGN IN</h1>

                        <Input
                            type="email"
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

                        <Button
                            type="submit"
                            value="sign in"
                            style={{
                                marginTop: '25px',
                                justifyContent: 'flex-end',
                            }}
                        />
                    </Form>
                </Formik>
            </Content>
        </Container>
    );
};

export default SignIn;
