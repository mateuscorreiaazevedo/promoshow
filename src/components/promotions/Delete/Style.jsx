import styled from "styled-components";
import { colors, border } from "../../../assets/css/vars";
const { secundary } = colors;

export const DeleteSection = styled.section`
    width: 460px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 0 1em;
    align-items: center;
`

export const DeleteTitle = styled.h3`
    font-size: 1.6em;
    color: ${secundary};
`

export const ButtonsArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    button {
        cursor: pointer;
        font-weight: bold;
        font-size: .9em;
        width: 10em;
        height: 3em;
        border: none;
        border-radius: .5em;
        
    }
    .btn-ok {
        color: #fff;
        background-color: #118b3c;
    transition: all 600ms ease;
        &:hover {
            background: #1ED760;
        }
    }
    .btn-close {
        background-color: #a4161a;
        color: #fff;
        transition: all 600ms ease;
        &:hover {
            background: #ba181b;
        }
    }
`