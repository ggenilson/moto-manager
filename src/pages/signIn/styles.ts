import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
`;

export const Content = styled.div`
    width: 500px;
    height: 370px;
    display flex;
    flex-direction: column;
    align-items: center;
    background-color: #1d1e42;
    border-radius: 9px;

    h1 {
        color: var(--color-secondary);
        text-align: center;
        margin: 40px 0;
    }

    .btn-sign-in {
        margin-top: 20px;
    }
`;

export const Header = styled.header`
    text-align: center;
    margin-top: 40px;
`;
