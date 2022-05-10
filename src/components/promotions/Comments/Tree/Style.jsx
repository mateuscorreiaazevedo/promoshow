import styled from "styled-components";
import { border, colors } from "../../../../assets/css/vars";

const { dark, light, primary, secundary } = colors;

export const ListComments = styled.ul`
    list-style: none;
    padding: 1em;
    border-radius: .5em;
    background-color: #fff;
    li {
        border: ${border};
        padding: .5em;
        border-radius: .5em;
        margin: 2em 0;
        display: flex;
        gap: .5em;
        img {
        box-shadow: 0 0 9px ${primary};
        width: 4.5em;
        height: 4.5em;
        border-radius: 50%;
        }
        .user-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: .1em 0;
            flex-grow: 1;
        }
        .elipes-btn {
            color: ${secundary};
            border: none;
            background: unset;
            margin: 0;
        }
    }
    .message-comments {
        color: ${secundary};
    }
`