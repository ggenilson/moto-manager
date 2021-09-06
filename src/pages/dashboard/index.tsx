import React, { FC, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { parseCookies } from 'nookies';

import { Taxi } from '../../assets';

import { AuthContext } from '../../contexts';

import { Options } from './utils';

import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Body,
    BodyItem,
} from './styles';

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
            <Content>
                <Header>
                    <Left>
                        <img src={Taxi} alt="logo" />

                        <h2>Moto Manager</h2>
                    </Left>

                    <Right>
                        <img src={Taxi} alt="logo" />
                        <span>Genilson Araújo</span>
                    </Right>
                </Header>

                <Body>
                    {Options.map((value, id) => (
                        <BodyItem key={`body-item-${id}`}>
                            <i className={value.icon} />
                            <span>{value.name}</span>
                        </BodyItem>
                    ))}
                </Body>
            </Content>
        </Container>
    );
};

export default Dashboard;
