import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 1em 0;

    .icon {
        font-size: 2em;
        color: #aaa;
        transition: all 600ms ease-in-out;
        
        &:hover {
            color: #222;
        }
    }
`