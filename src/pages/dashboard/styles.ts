import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: var(--color-primary);
    padding: 40px;
`;

export const Content = styled.div`
    background-color: #1d1e42;
    width: 1200px;
    min-height: 600px;
    height: auto;
    border-radius: 7px;
`;

export const Header = styled.div`
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 35px 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #141432;

    img {
        width: 40px;
        height: 40px;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    color: #9d9fb2;
    margin-left: 20px;
    padding-left: 10px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 7px;
        left: -10px;
        background-color: var(--color-secondary);
        width: 15px;
        height: 15px;
        border-radius: 15px;
    }

    h2 {
        font-weight: bold;
    }
`;

export const UserImg = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 31px;
        background-color: green;
        width: 10px;
        height: 10px;
        border-radius: 15px;
    }

    img {
        margin-right: 10px;
        border-radius: 40px;
    }
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    width: 20%;

    span {
        font-size: 16px;
        color: #9d9fb2;
    }

    i {
        margin-left: 25px;
        font-size: 25px;
        color: #9d9fb2;
        cursor: pointer;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    padding: 40px;
`;

export const BodyItem = styled.div`
    width: 200px;
    height: 70px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    padding-left: 10px;
    margin-bottom: 20px;

    ${props =>
        props.className === 'active' &&
        `background-color: var(--color-secondary);`}

    i {
        margin-right: 20px;
        margin-left: 10px;
        font-size: 20px;
        color: #fff;
    }

    span {
        color: #9d9fb2;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const LeftSide = styled.div``;

export const CenterSide = styled.div`
    width: 90%;
    min-height: 10px;
    height: auto;
    background-color: #141432;
    border-radius: 10px;
    margin-left: 25px;
    padding: 29px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;

    span {
        &:nth-child(2) {
            font-size: 12px;
        }
    }
`;

export const HeaderCenterSide = styled.div`
    display: flex;
    align-items: center;
    color: #9d9fb2;
    margin-bottom: 20px;

    i {
        font-size: 25px;
        margin-right: 10px;
    }

    span {
        font-size: 18px;
        font-weight: bold;
    }
`;
