import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
        font-weigth: bold;
        font-size: 16px;
    }
`;
