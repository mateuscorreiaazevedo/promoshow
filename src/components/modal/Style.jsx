import styled from "styled-components";
import { Btn, InputDefault, border, colors } from "../../assets/css/vars";
const { dark, light, primary, secundary } = colors;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ScreenContainer = styled.div`
    background-color: ${light};
    padding: 1em 2em;
    border-radius: 0.5em;
`