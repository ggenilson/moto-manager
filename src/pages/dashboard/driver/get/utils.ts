import { api as Api } from '../../../../services/api';
import { UserInfoType } from '../../../../contexts/AuthContext/types';

export async function getDrivers(): Promise<UserInfoType[] | null> {
    try {
        const userInfo = await Api.get('/driver');

        if (userInfo) {
            return userInfo?.data;
        }

        return null;
    } catch (err) {
        console.log('Error: ', err);
        return null;
    }
}
