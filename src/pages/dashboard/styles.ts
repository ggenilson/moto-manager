import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    // align-items: center;
    background-color: #2f373d;
    padding: 40px;
`;

export const Content = styled.div`
    background-color: var(--color-primary);
    width: 1200px;
    height: 600px;
    border-radius: 7px;
`;

export const Header = styled.div`
    width: 100%;
    background-color: var(--color-secondary);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    height: 50px;
    box-shadow: 0 0 10px #000;
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
`;

export const Body = styled.div`
    padding: 40px;
`;

export const BodyItem = styled.div`
    width: 100px;
    height: 90px;
`;
