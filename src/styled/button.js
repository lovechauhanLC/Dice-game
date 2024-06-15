import styled from "styled-components";

export const Button = styled.button`
    color: white;
    background: black;
    border: none;
    border-radius: 5px;
    width: 220px;
    height: 44px;
    padding:10px 18px;
    font-size: 16px;
    transition: 0.5s background ease-in;
    cursor: pointer;

    &:hover{
        background: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;

export const OutLineButton = styled(Button)`
    color: black;
    background: white;
    border:2px solid black;
    &:hover{
        background: black;
        color: white;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;