import React, { FC, useEffect } from 'react';
import { parseCookies } from 'nookies';

import Router from '../../services/history';

const Dashboard: FC = () => {
    useEffect(() => {
        const { '@moto-user-auth-token': token } = parseCookies();

        if (!token) {
            Router.push('/');
        }
    }, []);

    return (
        <>
            <h1>Hello Peter 1</h1>
        </>
    );
};

export default Dashboard;
