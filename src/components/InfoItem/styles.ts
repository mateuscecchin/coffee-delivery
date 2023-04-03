import styled from "styled-components"

export const InfoItemContainer = styled.div`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;
    justify-self: start;
`

export const CircleFill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.color};
    padding: 0.5rem 0.5rem;
    border-radius: 999px;
`

export const LabelInfoItem = styled.div`
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 1rem;
    font-weight: 400;
`