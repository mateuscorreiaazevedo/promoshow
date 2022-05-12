import styled from "styled-components";
import { border, colors } from "../../../../assets/css/vars";

const { dark, light, primary, secundary } = colors;

export const ListComments = styled.div`
`
export const AnswerButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    font-weight: bold;
    border: 0;
    color: ${primary};
    padding: 0;
    align-self: flex-start;
    margin-top: .2em;
    transition: all 300ms ease;
    input {
        display: none;
    }
    &:hover {
        color: #0477be;
    }
`
export const Elipses = styled.nav`
    position: absolute;
    right: 2em;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: .0625em;
    .options-btn {
        margin: .1em .5em ;
        border: ${border};
        border-color: ${secundary};
        background-color: rgba(255, 255, 255, 0.5);
        padding: .3em;
        border-radius: .2em;
    }
    .btn {
        cursor: pointer;
        border: none;
        background-color: unset;

    }
`
export const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1em;
    margin-top: .8em;
    textarea {
        border-radius: .5em;
        margin-bottom: .5em;
        border-color: ${secundary};
        padding: .5em .5em 0;
        &:focus {
            outline: ${border};
        }
    }
    .send-btn {
        align-self: flex-end;
        cursor: pointer;
        border-radius: .25em;
        background-color: unset;
        height: 1.5em;
        width: 4em;
        border: ${border};
        color: ${primary};
        margin-left: 1em;
    }
`