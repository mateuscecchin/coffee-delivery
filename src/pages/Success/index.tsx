import { InfoItem } from "../../components/InfoItem";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useMarketContext } from "../../contexts/market";
import { Main, SectionInfo, Separator, SubTitle, Title } from "./styles";

export function Success() {
    const { addressInfo, paymentSelected } = useMarketContext();
    const { rua, numero, cidade, uf, bairro } = addressInfo;

    const payment = toPascalCase(paymentSelected!)

    return (
        <Main>
            <Separator>
                <div>
                    <Title>Uhu! Pedido confirmado</Title>
                    <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
                    <SectionInfo>
                        <InfoItem color={defaultTheme.colors.purple} icon={MapPin}>
                            Entrega em{" "}
                            <b>
                                {rua}, {numero}
                            </b>{" "}
                            <br /> {bairro} - {cidade}, {uf?.toUpperCase()}
                        </InfoItem>
                        <InfoItem color={defaultTheme.colors.yellow} icon={Timer}>
                            Previsão de entrega
                            <br />
                            <b>20 min - 30 min</b>
                        </InfoItem>
                        <InfoItem
                            color={defaultTheme.colors["yellow-dark"]}
                            icon={CurrencyDollar}
                        >
                            Pagamento na entrega
                            <br />
                            <b>{payment}</b>
                        </InfoItem>
                    </SectionInfo>
                </div>
                <div style={{ display: "flex", alignItems: "end" }}>
                    <img src="/Illustration.svg" width="492px" height="293px" />
                </div>
            </Separator>
        </Main>
    );
}

function toPascalCase(str: string) {
    const firstChar = str?.[0].toUpperCase();
    const restChar = str?.slice(1, str.length).toLocaleLowerCase();

    const strFinal = `${firstChar || ""}${restChar || ""}`
    return strFinal
}
