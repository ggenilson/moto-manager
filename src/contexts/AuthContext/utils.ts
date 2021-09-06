import { api as Api } from '../../services/api';
import { SignInDataType, UserInfoReturnType } from './types';

export async function signInRequest(
    data: SignInDataType,
): Promise<UserInfoReturnType | null> {
    try {
        const userInfo = await Api.post('/user/login', data);

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
