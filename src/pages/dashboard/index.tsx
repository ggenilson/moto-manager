import React, { FC, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { parseCookies } from 'nookies';

import { AuthContext } from '../../contexts';

import { Container } from './styles';

const Dashboard: FC = () => {
    const { signOut } = useContext(AuthContext);
    const Router = useHistory();

    useEffect(() => {
        const { '@moto-user-auth-token': token } = parseCookies();

        if (!token) {
            Router.push('/');
        }
    }, []);

    return (
        <Container>
            <h1>Hello Peter 1</h1>
        </Container>
    );
};

export default Dashboard;
