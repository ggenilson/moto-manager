import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Required field*'),
    password: Yup.string().required('Required field*'),
});
