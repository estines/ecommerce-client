import styled, { keyframes } from 'styled-components'

const fadeInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
`

const fadeInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(50px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
`

export const TextBox = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    animation: ${props => {
        if (props.position === 'left') {
            return `${fadeInLeft} 2s`
        }
        else {
            return `${fadeInRight} 2s`
        }
    }};
`

export const ImageBox = styled.div`
    width: 50%;
    animation: ${props => {
        if (props.position === 'left') {
            return `${fadeInLeft} 2s`
        }
        else {
            return `${fadeInRight} 2s`
        }
    }};
`

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const FlexBox = styled.div`
    display: flex;
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
`


export const Contents = styled.div`
    display: flex;
    width: 100%;
`

export const Aside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    margin-right: 15px;
    width: 200px;
`

export const Main = styled.div`
    display: flex;
    margin-left: 15px;
    margin-right: 30px;
    width: 100%;
    flex-wrap: wrap;
`