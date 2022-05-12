import styled from "styled-components";
import { border, colors } from "../../../../assets/css/vars";

const { dark, light, primary, secundary } = colors;

export const ListComments = styled.ul`
    margin-top: 1em;
    list-style: none;
    padding: .1em 0;
    border-radius: .5em;
    background-color: #fff;
    li {
        background-color: #f8f9fa;
        padding: .8em;
        border-radius: .5em;
        display: flex;
        gap: .5em;
        img {
        box-shadow: 0 0 9px ${primary};
        width: 4em;
        height: 4em;
        border-radius: 50%;
        margin-right: 1em;
        }
        .user-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: .1em 0;
            flex-grow: 1;
        }
    }
`

export const Elipses = styled.nav`
    position: relative;
    ul {
        transition: all 600ms ease;
        position: absolute;
        display: none;
        background-color: transparent;
        right: -.8em;
        top: .8em;
        padding: 0;
        margin: 0;
        .btn {
            cursor: pointer;
            border: none;
            background-color: unset;
        }
    }
    &:hover {
        ul{
            display: block;
        }
    }
`