import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f373d;
`;

export const Content = styled.div`
    width: 500px;
    height: 356px;
    display flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 9px;

    h1 {
        color: var(--color-secondary);
        text-align: center;
        margin: 40px 0;
    }
`;

export const Header = styled.header`
    text-align: center;
    margin-top: 40px;
`;
