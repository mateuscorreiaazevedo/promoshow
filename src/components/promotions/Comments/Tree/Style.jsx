import styled from "styled-components";
import { colors } from "../../../../assets/css/vars";

const { dark, light, primary, secundary } = colors;

export const ListComments = styled.ul`
    list-style: none;
    padding: 1em;
    border-radius: .5em;
    background-color: #fff;
    li {
        display: flex;
        gap: 1em;
        img {
        box-shadow: 0 0 9px ${primary};
        width: 4.5em;
        height: 4.5em;
        border-radius: 50%;
        }
        .user-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: .1em 0;
            gap: .4em;
        }
    }
`