import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    width: 403px;
    height: 172px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

export const LeftUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    h1 {
        margin-bottom: 10px;
    }

    span {
        color: rgb(186, 186, 186);
    }
`;

export const RightUserInfor = styled.div`
    width: 90px;
    height: 87px;
    background-color: rgb(153, 153, 153);
    margin-right: 10px;

    img {
        width: 100%;
        height: 100%;
    }
`;
