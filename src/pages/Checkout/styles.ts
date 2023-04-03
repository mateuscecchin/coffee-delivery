import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    width: 100%;
    margin: 2rem auto;
`;

export const Flex = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const SectionRounded = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 6px 44px;
    background: ${props => props.theme.colors["base-card"]};
    margin-top: 0.8rem;
`
export const Gap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.2rem 0px;
    gap: 0.8rem;
`

export const Divider = styled.div`
    height: 1px;
    background-color: ${props => props.theme.colors["base-button"]};
    margin: 2.1rem 0px;
`

