import { UserInfoType } from '../contexts/AuthContext/types';

export const getUserInfo = (): UserInfoType | null => {
    const userInfo = localStorage.getItem('user-info');

    if (userInfo) {
        const userInfoParse: UserInfoType = JSON.parse(userInfo);
        const { _id, name, access, email } = userInfoParse;

        return {
            _id,
            name,
            access,
            email,
        };
    }

    return null;
};

export function paginateData(data: any[], numberByPage: number) {
    let dataDivided: any[] = [];
    let newData = [...data];

    while (newData.length) {
        dataDivided = [...dataDivided, newData.slice(0, numberByPage)];
        newData.splice(0, numberByPage);
    }

    return dataDivided;
}
