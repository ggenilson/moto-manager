import React, { FC, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { parseCookies } from 'nookies';

import { User } from '../../assets';

import { AuthContext, InfoCardContext } from '../../contexts';
import { ApplicationState, saveMenuClicked } from '../../state';

import { getUserInfo } from '../../utils';
import { Options } from './utils';
import { MenuType } from '../../@types';

import Driver from './driver/get';
import Attendance from './attendance/get';

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
    HeaderCenterSide,
} from './styles';

const Dashboard: FC = () => {
    const menu = useSelector((state: ApplicationState) => state.menu);
    const dispatch = useDispatch();
    const { signOut } = useContext(AuthContext);
    const { text } = useContext(InfoCardContext);
    const Router = useHistory();

    function verifyAccess(access: string[]) {
        return access.indexOf(getUserInfo()?.access || 'undefined') > -1;
    }

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
                        {Options.map(
                            (value, id) =>
                                verifyAccess(value.access) && (
                                    <BodyItem
                                        key={`body-item-${id}`}
                                        className={
                                            menu === value.name ? 'active' : ''
                                        }
                                        onClick={() =>
                                            dispatch(
                                                saveMenuClicked(value.name),
                                            )
                                        }
                                    >
                                        <div>
                                            <i className={value.icon} />
                                        </div>
                                        <span>{value.name}</span>
                                    </BodyItem>
                                ),
                        ) || <></>}
                    </LeftSide>

                    <CenterSide>
                        <HeaderCenterSide>
                            <i className="bx bx-info-square" />

                            <span>{text}</span>
                        </HeaderCenterSide>

                        {menu === MenuType.DRIVER ? (
                            <Driver />
                        ) : menu === MenuType.ATTENDANCE ? (
                            <Attendance />
                        ) : (
                            <></>
                        )}
                    </CenterSide>
                </Body>
            </Content>
        </Container>
    );
};

export default Dashboard;
