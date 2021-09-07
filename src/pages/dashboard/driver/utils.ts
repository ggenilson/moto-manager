import { api as Api } from '../../../services/api';
import { UserInfoReturnType } from '../../../contexts/AuthContext/types';
import { IFormValue } from './types';

export async function saveDriver(
    data: IFormValue,
): Promise<UserInfoReturnType | null> {
    try {
        const userInfo = await Api.post('/driver', data);

        if (userInfo) {
            const { user, token } = userInfo?.data;

            return { user, token };
        }

        return null;
    } catch (err) {
        console.log('Error: ', err);
        return null;
    }
}
