import styled from "styled-components/native";

export const LineInput = styled.TextInput`
    border-bottom-width: 1px;
    border-bottom-color: #F2F2F2;
    align-self: stretch;
    margin-bottom: ${(props) => props.error ? "0px" : "60px"};
    margin-right: 30px;
    color: #F2F2F2;
    font-size: 24px;
    font-weight: 400;
    margin-left: 30px;
`

export const OutlineInput = styled.TextInput`
    align-self: stretch;
    padding: 5px;
    border-radius: 10px;
    background-color: #D3D3D3;
    margin-right: 30px;
    color: #40330C;
    font-size: 24px;
    font-weight: 400;
    margin-left: 30px;
`

export const Row = styled.View`
    align-self: stretch;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const Error = styled.Text`
    margin-left: 30px;
    color: #FF7A00;
    margin-bottom: ${(props) => props.error ? "50px" : "0px"};
    margin-right: 30px;
`