import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Campo obrigatório*'),
    password: Yup.string().required('Campo obrigatório*'),
});
