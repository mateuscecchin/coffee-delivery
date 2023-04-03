import Img from "../../assets/Imagem.png"
import { defaultTheme } from "../../styles/themes/default";
import { InfoItem } from "../../components/InfoItem";
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { ContentSection, InfoBackground, InfoContainer, InfoSection, Section, Description, Title, TitleSecondary } from "./styles";
import { Card } from "../../components/Card";
import styled from "styled-components";
import { coffee } from "../../services/CoffeeApi";
import { useMarketContext } from "../../contexts/market";

export function Home() {
    const { cart } = useMarketContext();

    console.log("cart", cart)
    return (
        <Section>
            <InfoBackground>
                <InfoSection>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Title>Encontre o café perfeito <br /> para qualquer hora do dia</Title>
                        <Description>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</Description>
                        <InfoContainer>
                            <InfoItem icon={ShoppingCart} color={defaultTheme.colors["yellow-dark"]}>
                                Compra simples e segura
                            </InfoItem>
                            <InfoItem icon={Package} color={defaultTheme.colors["base-text"]} >
                                Embalagem mantém o café intacto
                            </InfoItem>
                            <InfoItem icon={Clock} color={defaultTheme.colors["yellow"]} >
                                Entrega rápida e rastreada
                            </InfoItem>
                            <InfoItem icon={Coffee} color={defaultTheme.colors["purple"]} >
                                O café chega fresquinho até você
                            </InfoItem>
                        </InfoContainer>
                    </div>
                    <img src={Img} />
                </InfoSection>
            </InfoBackground>
            <ContentSection>
                <TitleSecondary>Nossos cafés</TitleSecondary>
                <CardContainer>
                    {coffee.map(coffee => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}
                </CardContainer>
            </ContentSection>
        </Section>
    )
}

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem 2rem;
`