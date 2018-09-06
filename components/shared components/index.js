import styled from 'styled-components'

export const Articles = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`

export const Card = styled.div`
    display: block;
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    margin-bottom: 20px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const Content = styled.div`
    display: block;
    padding: 2px 16px;
`

export const Image = styled.img`
    width: 100%;
    border-radius: 5px 5px 0 0;
`