import styled from "styled-components";
import { Btn, InputDefault, border, colors } from "../../../assets/css/vars";

const { dark, light, primary, secundary} = colors;


export const CommentsContainer = styled.div`
    width: 840px;
    height: 540px;
    position: relative;
    overflow-y: auto;
    padding: .5em 1.5em;
    .title-comments {
        margin-bottom: 1em;
        font-weight: bold;
        text-align: start;
        color: ${dark};
    }
    .close-btn {
        cursor: pointer;
        position: absolute;
        top: .5em;
        right: 1em;
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
    .message-comments {
        color: ${secundary};
    }
`
export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: .1em;
    align-items: flex-end;
    textarea {
        width: 100%;
        border-radius: .5em;
        border: ${border};
        border-color: #aaa;
        padding: 1em;
        :focus {
            outline-color: #aaa;
        }
    }
    button {
        ${Btn}
        position: inherit;
        text-align: center;
        background-color: unset;
    }
`
export const CommentSection =styled.ul`
    list-style: none;
    li.comment-box {
        background-color: #efefef;
        border-radius: .5em;
        padding: 1em 2em;
        margin: 1em 0;

        .comment-content {
            display: flex;
            gap: 1em;
            .image-user {
                width: 4em;
                height: 4em;
                border-radius: 50%;
            }
            .user-container {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                gap: .1em;
                
            }
        }
    }
    ol.comment-box {
        padding-left: 5em;
        margin-top: 1em;
    }
`