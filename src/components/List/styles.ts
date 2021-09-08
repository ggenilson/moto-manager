import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #1d1e42;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;

    span {
        font-size: 16px;
        color: #9d9fb2;
    }
`;

export const TopItems = styled.div`
    display: flex;
    justify-content: space-between;

    .input-item {
        width: 40%;
    }
`;

export const BottomItems = styled.div``;

export const AddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    background-color: #1d1e42;
    color: #9d9fb2;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        transform: scale(1.1);
    }
`;
