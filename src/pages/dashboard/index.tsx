import React, { FC, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { parseCookies } from 'nookies';

import { User } from '../../assets';

import { AuthContext } from '../../contexts';

import { getUserInfo } from '../../utils';
import { Options } from './utils';

// import Driver from './driver';
import Driver from './driver/get';

import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Body,
    UserInfo,
    LeftSide,
    CenterSide,
    BodyItem,
    UserImg,
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
                        <h2>Moto Manager</h2>
                    </Left>

                    <Right>
                        <UserImg>
                            <img src={User} alt="user" />
                        </UserImg>

                        <UserInfo>
                            <span>{getUserInfo()?.name}</span>
                            <span>{getUserInfo()?.access}</span>
                        </UserInfo>

                        <i
                            className="bx bx-log-in"
                            onClick={() => {
                                signOut();
                                Router.push('/');
                            }}
                        />
                    </Right>
                </Header>

                <Body>
                    <LeftSide>
                        {Options.map((value, id) => (
                            <BodyItem
                                key={`body-item-${id}`}
                                className={value.status}
                            >
                                <div>
                                    <i className={value.icon} />
                                </div>
                                <span>{value.name}</span>
                            </BodyItem>
                        ))}
                    </LeftSide>

                    <CenterSide>
                        <Driver />
                    </CenterSide>
                </Body>
            </Content>
        </Container>
    );
};

export default Dashboard;
