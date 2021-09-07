import { OptionType } from './types';

export const isEmpty = (obj: any) => {
    const arFilter = Object.keys(obj).filter(val => obj[val] === '') || [];

    return arFilter?.length === Object.keys(obj)?.length;
};

export const Options: OptionType[] = [
    {
        name: 'Driver',
        icon: 'bx bxs-car',
        status: 'active',
    },
    {
        name: 'Attendance',
        icon: 'bx bx-user',
        status: 'no-active',
    },
];
