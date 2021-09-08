import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Required field*'),
    email: Yup.string().email('Email inválido').required('Required field*'),
    password: Yup.string().required('Required field*'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required field*'),
});
