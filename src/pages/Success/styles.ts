import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  margin: 5rem auto;
`;

export const Title = styled.h1`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    color: ${props => props.theme.colors["yellow-dark"]};
`

export const SubTitle = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.theme.colors["base-subtitle"]};
`

export const SectionInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    margin-top: 2.5rem;
    gap: 2rem;

    background: linear-gradient(#fafafa, #fafafa) padding-box, 
    linear-gradient(to right,
      ${props => props.theme.colors["yellow"]}, 
      ${props => props.theme.colors["purple"]}
    ) border-box;
    border: 1px solid transparent;
    border-radius: 6px 36px;
   
`

export const Separator = styled.div`
    display: flex;
    flex: 1;
    flexDirection: row;
    justify-content: space-between;
`
