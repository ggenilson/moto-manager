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
