import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    // align-items: center;
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
    padding-top: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;

    img {
        width: 40px;
        height: 40px;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    margin-left: 20px;

    h2 {
        font-weight: bold;
    }
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    width: 20%;

    img {
        margin-right: 10px;
        border-radius: 40px;
    }

    span {
        font-size: 16px;
        color: #fff;
    }

    i {
        margin-left: 25px;
        font-size: 25px;
        color: #fff;
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
    border-radius: 29px;
    cursor: pointer;
    padding-left: 10px;
    margin-bottom: 20px;

    ${props => props.className === 'active' && `background-color: #26264f;`}

    i {
        margin-right: 20px;
        margin-left: 10px;
        font-size: 20px;
        color: #534eea;
    }

    span {
        color: #9d9fb2;
        font-size: 20px;
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

    h2 {
        margin-bottom: 20px;
        font-weigth: bold;
        color: #9d9fb2;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
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
