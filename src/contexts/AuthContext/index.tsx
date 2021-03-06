import React, { FC, createContext, useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';
import { toast } from 'react-toastify';

import {
    AuthContextType,
    UserInfoType,
    SignInDataType,
    DataValueType,
} from './types';

import { api as Api } from '../../services/api';
import history from '../../services/history';
import { signInRequest } from './utils';

export const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<UserInfoType | null>(null);

    const isAuthenticated = !!user;

    async function signIn(
        { email, password }: SignInDataType,
        dataValue: DataValueType,
    ) {
        const userInfo = await signInRequest({
            email,
            password,
        });

        if (userInfo) {
            const { user, token } = userInfo;

            setCookie(undefined, '@moto-user-auth-token', token, {
                maxAge: 60 * 60 * 1, // 1 hour
            });

            localStorage.setItem('user-info', JSON.stringify(user));

            Api.defaults.headers['Authorization'] = `Bearer ${token}`;

            history.push('/dashboard');
            toast.success('Bem-vindo!');
            setUser(user);
            dataValue(true);
        } else {
            toast.error('Invalid user or password!');
            dataValue(false);
        }
    }

    function signOut() {
        destroyCookie(undefined, '@moto-user-auth-token', {
            path: '/',
        });
        localStorage.removeItem('user-info');

        history.push('/');
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
