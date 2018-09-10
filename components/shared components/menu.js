import styled from 'styled-components'

export const NavBlock = styled.div`
    display: block;
    margin: 0 24px;
    white-space: nowrap;
    width: auto;
`

export const NavFlexBox = styled.div`
    display: flex;
    margin: 0 24px;
    white-space: nowrap;
    width: auto;
`


export const NavMenu = styled.a`
    text-decoration: none;
    position: relative;
    display: block;
    padding: 16px 0;
    letter-spacing: 1px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    text-transform: uppercase;
    transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
    color: #000;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 10px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #000;
        transform-origin: left top;
        transform: scale(0, 1);
        transition: color 0.1s,transform 0.5s ease-out;
    }


    &:active::before {
        background-color: #000;
    }

    &:hover::before , &:focus::before {
        transform-origin: left top;
        transform: scale(1, 1);
    }
`