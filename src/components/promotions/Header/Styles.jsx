import styled from "styled-components";
import { border, colors, Btn, InputDefault } from "../../../assets/css/vars";

const { primary, secundary, dark, light } = colors

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    gap: 1em;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .title {
        font-size: 3em;
        color: ${secundary};
    }
    .new-promotion-link {
        position: absolute;
        right: 0;
        ${Btn}
        width: 10em;
        background-color: ${light};
        text-align: center;
        
        &:hover {
            width: 16em;
        }
    }
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    & .search-icon {
        position: absolute;
        right: 2em;
        color: ${primary};
    }
`
export const SearchInput = styled.input`
   ${InputDefault}
   padding-right: 4em;
`