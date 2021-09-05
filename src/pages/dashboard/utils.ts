/* eslint-disable import/prefer-default-export */
export const isEmpty = (obj: any) => {
    const arFilter = Object.keys(obj).filter(val => obj[val] === '') || [];

    return arFilter?.length === Object.keys(obj)?.length;
};
