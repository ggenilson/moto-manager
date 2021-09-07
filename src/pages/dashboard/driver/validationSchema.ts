import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Campo obrigatório*'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório*'),
    password: Yup.string().required('Campo obrigatório*'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Campo obrigatório*'),
});
