import styled from "styled-components";
import { Btn, InputDefault, border, colors } from "../../../assets/css/vars";

const { dark, light, primary, secundary} = colors;


export const CommentsContainer = styled.div`
    width: 840px;
    height: 560px;

    .title-comments {
        margin-bottom: 1em;
        font-weight: bold;
        text-align: start;
        color: ${dark};
    }
    .close-btn {
        cursor: pointer;
        position: absolute;
        top: 1em;
        right: 1em;
        font-size: 1.5em;
        border: unset;
        background: unset;
        color: rgba(255, 255, 255, 0.5);
        transition: all 600ms ease;
        
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
    .comments {
        font-weight: bold;
    }
`