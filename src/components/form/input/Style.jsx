import styled from "styled-components";
import { Btn, border, colors, InputDefault } from "../../../assets/css/vars";

const { dark, light, primary, secundary} = colors;

export const InputContainer = styled.div`
    margin: 1em 2em;
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    ${InputDefault}
`
export const Label = styled.label`
    font-size: 1.3em;
    letter-spacing: .0625em;
    margin: .5em 0;
`