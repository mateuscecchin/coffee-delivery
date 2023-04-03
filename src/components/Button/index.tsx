import { ButtonHTMLAttributes, PropsWithChildren } from "react"
import styled from "styled-components"


export function Button({ children, ...rest }: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <ButtonContainer {...rest}>
            {children}
        </ButtonContainer>

    )
}

const ButtonContainer = styled.button`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    border: 0px;

    background: ${props => props.theme.colors["yellow"]};
    border-radius: 6px;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${props => props.theme.colors["white"]};

    &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors["yellow-dark"]};
    }

`