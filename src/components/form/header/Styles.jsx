import styled from "styled-components";
import { Btn, InputDefault, border, colors } from "../../../assets/css/vars";

const { dark, light, primary, secundary} = colors;

export const HeaderContainer = styled.header`
    margin: 2em 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    & .form-title {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: bold;
        color: ${dark};
        transition: all 300ms ease;

        &:hover {
            color: ${secundary};
            text-shadow: .05em .1em .1em ${dark};
        }
    }
`