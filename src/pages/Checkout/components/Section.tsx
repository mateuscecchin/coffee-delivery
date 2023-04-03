import { Icon } from "phosphor-react"
import { PropsWithChildren } from "react"
import styled from "styled-components"
import { defaultTheme } from "../../../styles/themes/default"

interface AreaProps extends PropsWithChildren {
    icon: IIcon;
    title: string;
    subtitle: string;

}

interface IIcon {
    icon: Icon
    color: "yellow-dark" | "purple"
}

export function Section({ children, icon, title, subtitle }: AreaProps) {
    const { icon: Icon, color } = icon

    return (
        <Container>
            <Row>
                <Icon width={22} height={22} color={defaultTheme.colors[color]} />
                <FlexColumn>
                    <Heading>{title}</Heading>
                    <Description>{subtitle}</Description>
                </FlexColumn>
            </Row>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 6px;
    background: ${props => props.theme.colors["base-card"]};
    margin-top: 0.8rem;
`

const Heading = styled.div`
  font-size: 20px; 
  font-weight: 400;
  color: ${props => props.theme.colors["base-subtitle"]};
`

const Description = styled.p`
      color: ${props => props.theme.colors["base-text"]};
      font-weight: 400;
      font-size: 14px;
      line-height: 18.2px;
`

const Row = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
`