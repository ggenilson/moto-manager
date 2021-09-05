import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #818083;
    border-radius: 5px;
    padding: 5px;
    width: 100%;

    input {
        padding: 10px;
        border: none;
        width: 350px;
        color: #818083;
        background-color: transparent;
    }
`;

export const Icon = styled.div`
    font-size: 20px;
    color: var(--color-secondary);
`;
