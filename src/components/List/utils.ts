import { paginateData } from '../../utils';

export const searchInArray = (arr: any[], value: any) => {
    let newArray: any[] = [];

    for (const item of arr) {
        let helper;

        item.forEach((val: { [x: string]: string | any[] }) => {
            helper = Object.keys(val).filter(
                v =>
                    val[v]
                        .toString()
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) > -1,
            );

            if (helper.length) {
                newArray.push(val);
            }
        });
    }

    return paginateData(newArray, 4);
};
