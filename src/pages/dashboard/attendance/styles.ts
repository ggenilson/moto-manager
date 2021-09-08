import styled from 'styled-components';

export const ListButtons = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`;

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
`;

export const LeftForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;

    .header {
        margin-bottom: 15px;
    }

    .location-container {
        width: 100%;
        margin-left: 10px;

        span {
            font-size: 17px;
            color: #9d9fb2;
        }
    }
`;
