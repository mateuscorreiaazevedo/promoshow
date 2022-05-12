import styled from "styled-components";
import { border, colors, Btn } from "../../../assets/css/vars";
const { primary, secundary, dark, light } = colors

export const CardSection = styled.section`
    display: flex;
    border: ${border};
    margin: 1em 0;
    padding: .5em;
    border-radius: .5em;
    background-color: ${light};
    align-items: center;
    height: 12em;
`
export const CardImage = styled.img`
    width: 10em;
    margin-right: 2em;
`
export const CardInfo = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    .card-title {
        color: ${dark};
    }
`
export const CardPrice = styled.span`
    color: ${primary};
    margin-top: 1em;
    font-size: 1.5em;
`
export const CardFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-right: 1em;
`
export const CardComments = styled.div`
    width: 34em;
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .comment-content {
        max-width: 26em;
        max-height: 1em;
        font-size: 1.2em;
        font-weight: 100;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${secundary};
        margin-bottom: .1em;
    }
    .comment-btn {
        align-self: flex-end;
        margin: .5em 0;
        cursor: pointer;
        background-color: unset;
        border: unset;
        color: ${primary};
        font-weight: bold;
        font-size: 1em;
    }
`
export const CardLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    
    .card-btn {
        cursor: pointer;
        right: .5em;
        ${Btn}
        &:nth-child(1) {
            top: -2.5em;
        }
        &:nth-child(2) {
            top: 0;
        }
        &:nth-child(3) {
            top: 2.5em;
        }
    }
`