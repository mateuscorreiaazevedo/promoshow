import styled from "styled-components";
import { Btn, InputDefault, border, colors } from "../../../assets/css/vars";

const { dark, light, primary, secundary } = colors;

export const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SubmitButton = styled.button`
    cursor: pointer;
    ${Btn}
    position: unset;
    text-align: center;
    background-color: ${light}; 
    
`