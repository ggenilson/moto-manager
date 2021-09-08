import * as Yup from 'yup';

export const validationSchema = Yup.object({
    street: Yup.string().required('Required field*'),
    city: Yup.string().required('Required field*'),
    state: Yup.string().required('Required field*'),
    latitude: Yup.string().required('Required field*'),
    longitude: Yup.string().required('Required field*'),

    street_: Yup.string().required('Required field*'),
    city_: Yup.string().required('Required field*'),
    state_: Yup.string().required('Required field*'),
    latitude_: Yup.string().required('Required field*'),
    longitude_: Yup.string().required('Required field*'),
});
