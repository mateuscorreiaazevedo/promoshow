import styled from "styled-components";
import { Btn, InputDefault, border, colors } from "../../../assets/css/vars";

const { dark, light, primary, secundary} = colors;


export const CommentsContainer = styled.div`
    width: 840px;
    height: 560px;
    position: relative;

    .title-comments {
        margin-bottom: 1em;
        font-weight: bold;
        text-align: start;
        color: ${dark};
    }
    .close-btn {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: -.5em;
        font-size: 1.5em;
        border: unset;
        background: unset;
        color: rgba(0, 0, 0, 0.5);
        transition: all 600ms ease;
        
        &:hover {
            color: rgba(0, 0, 0, 1);
        }
    }
    .comments {
        font-weight: bold;
    }
`
export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: flex-end;
    textarea {
        width: 100%;
        border-radius: .5em;
        border: ${border};
        border-color: #aaa;
        padding: 1em;

    }
    button {
        ${Btn}
        position: inherit;
        text-align: center;
        background-color: unset;
    }
`
