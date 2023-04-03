import styled from "styled-components";


export const HeaderContainer = styled.div`
    max-width: 1120px;
    min-height: 105px;
    width: 100%;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonGroupContainer = styled.div`
    display: flex;
    gap: 0.7rem;
    justify-content: flex-end;
    background-color: transparent;
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0.5rem;
    border-radius: 6px;
`

export const ButtonLocation = styled(Button)`
    color: ${props => props.theme.colors["purple-dark"]};
    background:  ${props => props.theme.colors["purple-light"]};
    cursor: pointer;
`

export const ButtonMarket = styled(Button)`
    position: relative;
    color: ${props => props.theme.colors["yellow-dark"]};
    background:  ${props => props.theme.colors["yellow-light"]};
    cursor: pointer;
`

export const Ball = styled.div`
    position: absolute;
    margin: -0.5rem;
    right: 0;
    top: 0;
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme.colors["yellow-dark"]};
    transition: background-color 0.6s;

    color: ${props => props.theme.colors["white"]};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
`