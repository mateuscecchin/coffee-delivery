import styled from "styled-components";
import BG from "../../assets/Background.png"

export const Section = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const InfoBackground = styled.div`
  display: flex;
  background-image: url(${BG});
  background-size: 100% 100%;

`

export const InfoSection = styled.div`
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: center;
   max-width: 1120px; 
   margin: 0 auto;
   margin-top: 6rem;

   gap: 2rem;

` 

export const Title = styled.h1`
     font-family: 'Baloo 2', cursive; 
     font-size: 3rem;
      line-height: 62.4px; 
      font-weight: 800;

`

export const Description = styled.div`
  font-size: 20px; 
  font-weight: 400;
  margin-top: 16px; 
  color: ${props => props.theme.colors["base-subtitle"]};
`

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 5rem;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1120px; 
  margin: 10rem auto;
  
`
export const TitleSecondary = styled.h1`
  font-family: 'Baloo 2', cursive; 
  font-size: 2rem;
  margin-bottom: 3rem;
  line-height: 41.6px; 
  font-weight: 800;
  color: ${props => props.theme.colors["base-subtitle"]};
`