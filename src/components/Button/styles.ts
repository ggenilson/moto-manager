import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
        width: 100px;
        background-color: var(--color-secondary);
        border: none;
        color: #fff;
        height: 40px;
        border-radius: 5px;
        transition: 0.4s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;
