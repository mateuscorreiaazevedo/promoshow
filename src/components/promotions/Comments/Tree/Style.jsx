import styled from "styled-components";
import { border, colors } from "../../../../assets/css/vars";

const { dark, light, primary, secundary } = colors;

export const ListComments = styled.ul`
    margin-top: 1em;
    border: none;
    list-style: none;
    padding: .1em 0;
    border-radius: .5em;
    background-color: #f8f9fa;
    position: relative;
    li {
        padding: .8em .8em 0;
        border-radius: .5em;
        display: flex;
        gap: .5em;
        img {
            width: 4em;
            height: 4em;
            border-radius: 50%;
            margin-right: 1em;
        }
        .user-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: 0;
            flex-grow: 1;
            padding: 0;
        }
    }
    .answer-box {
        margin-bottom: .5em;
        margin-left: 10em;
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
    &:hover {
        color: #0477be;
    }
`
export const Elipses = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: .0625em;
    .options-btn {
        border: ${border};
        border-color: #aaa;
        padding: .2em;
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
    align-items: flex-end;
    margin-top: .8em;
    textarea {
        border-radius: .5em;
        border-color: ${secundary};
        padding: .0625em .5em;
        &:focus {
            outline: ${border};
        }
    }
    .send-btn {
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