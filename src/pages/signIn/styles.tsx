import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Section = styled.section`
    position: relative;
    width: 379px;
    height: 356px;
    background-color: #fff;
`;

export const Header = styled.header`
    text-align: center;
    margin-top: 40px;
`;

export const Form = styled.form`
    width: 90%;
    position: relative;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;

    label {
        margin-bottom: 10px;
        color: rgb(203, 203, 203);
    }

    input {
        border: none;
        border-bottom: 1px solid rgb(189, 189, 189);
    }
`;

export const ButtonContainer = styled.div`
    align-self: center;
    margin-top: 20px;

    button {
        width: 94px;
        height: 39px;
        background: rgb(205, 220, 57);
        border: none;
        font-size: 14.5px;
        cursor: pointer;
    }
`;
