import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().required('Campo obrigatório*'),
    password: Yup.string().required('Campo obrigatório*'),
});
