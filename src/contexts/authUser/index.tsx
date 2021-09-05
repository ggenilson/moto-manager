import React, { FC, useState, createContext } from 'react';
import { ContextDefaultValuesProps, UserInfoProps } from './types';

const contexDefaultValues: ContextDefaultValuesProps = {
    authUser: {
        name: '',
        email: '',
        state: '',
        avatar: '',
    },
    setAuthUser: () => {},
};

export const AuthUserContext =
    createContext<ContextDefaultValuesProps>(contexDefaultValues);

const AuthUserProvider: FC = ({ children }) => {
    const [authUser, setAU] = useState<UserInfoProps>(
        contexDefaultValues.authUser,
    );

    const setAuthUser = (newAuthUser: any) => setAU(newAuthUser);

    return (
        <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthUserContext.Provider>
    );
};

export default AuthUserProvider;
