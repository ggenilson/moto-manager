import { OptionType } from './types';

export const isEmpty = (obj: any) => {
    const arFilter = Object.keys(obj).filter(val => obj[val] === '') || [];

    return arFilter?.length === Object.keys(obj)?.length;
};

export const Options: OptionType[] = [
    {
        name: 'Driver',
        icon: 'bx bxs-car',
        access: ['manager'],
    },
    {
        name: 'Attendance',
        icon: 'bx bx-user',
        access: ['manager', 'driver'],
    },
];
