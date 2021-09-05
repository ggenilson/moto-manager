import React, { FC, createContext, useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContextType, UserInfoType, SignInDataType } from './types';

import { signInRequest } from './utils';
import { api as Api } from '../../services/api';
export const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<UserInfoType | null>(null);
    const Router = useHistory();

    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInDataType) {
        const userInfo = await signInRequest({
            email,
            password,
        });

        if (userInfo) {
            const { user, token } = userInfo;

            setCookie(
                undefined,
                '@moto-user-auth-token',
                JSON.stringify({ user, token }),
                {
                    maxAge: 60 * 60 * 1, // 1 hour
                },
            );

            Api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser(user);

            // toast.success('Seja Bem-vindo!');
            Router.push('/dashboard');

            // setTimeout(() => Router.push('/dashboard'), 3000);
        }
    }

    function signOut() {
        destroyCookie(undefined, '@moto-user-auth-token', {
            path: '/',
        });
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
