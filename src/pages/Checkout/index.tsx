import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { CardCoffeeSelected } from "../../components/CardCoffeeSelected";
import { SubTitle } from "../../components/Subtitle";
import { AddressInfo, useMarketContext } from "../../contexts/market";
import { Section } from "./components/Section";
import { ButtonPayment } from "./components/ButtonPayment";
import { FormAddress } from "./components/FormAddress";
import { TextCustom } from "./components/TextCustom";
import { Form } from "../../components/Form";
import { useNavigate } from "react-router-dom";
import { Divider, Flex, Gap, Main, SectionRounded } from "./styles";

export function Checkout() {
    const navigate = useNavigate();
    const { cart, handleNewAddressInfo, handleClearCart, paymentSelected, addressInfo } = useMarketContext();
    const hasCart = cart.length > 0;
    const quantity = {} as any;

    if (hasCart)
        cart.map((c) => {
            return (quantity[c.name] = c.quantity);
        });

    const methods = useForm({
        defaultValues: { ...addressInfo, ...quantity }
    });

    function handleSubmit(data: AddressInfo) {
        if (!paymentSelected) {
            alert("Escolha um meio de pagamento");
            return;
        }
        if (!hasCart) {
            alert("Escolha pelo menos um café");
            return;
        }
        handleNewAddressInfo(data);
        handleClearCart();
        navigate("/success");
    }

    const totalCoffee = cart.reduce((pv, cv) => {
        const { quantity } = cv;
        const parseAmountValue = transformValue(
            "INTEGER",
            cv.item.amount.value
        ) as number;

        return parseAmountValue * quantity + pv;
    }, 0);

    const valueCoffe = transformValue("REAL_VALUES", totalCoffee);
    const deliveryRate = hasCart ? "3,50" : "0,00";
    const rate = transformValue("INTEGER", deliveryRate) as number;
    const totalNumber = totalCoffee + rate;
    const totalAsPay = transformValue("REAL_VALUES", totalNumber);

    return (
        <Main>
            <Form methods={methods} onSubmit={handleSubmit}>
                <Flex>
                    <div>
                        <SubTitle>Complete seu pedido</SubTitle>
                        <Section
                            icon={{ icon: MapPinLine, color: "yellow-dark" }}
                            title="Endereço de Entrega"
                            subtitle="Informe o endereço onde deseja receber seu pedido"
                        >
                            <FormAddress methods={methods} />
                        </Section>
                        <Section
                            icon={{ icon: CurrencyDollar, color: "purple" }}
                            title="Pagamento"
                            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                        >
                            <Flex style={{ gap: "0.5rem" }}>
                                <ButtonPayment option="CARTÃO DE CRÉDITO" />
                                <ButtonPayment option="CARTÃO DE DÉBITO" />
                                <ButtonPayment option="DINHEIRO" />
                            </Flex>
                        </Section>
                    </div>
                    <div>
                        <SubTitle>Cafés selecionados</SubTitle>
                        <SectionRounded>
                            {cart.map((c) => (
                                <div key={c.id}>
                                    <CardCoffeeSelected cart={c} />
                                    <Divider />
                                </div>
                            ))}
                            <Gap>
                                <TextCustom label="Total de itens" value={`R$ ${valueCoffe}`} />
                                <TextCustom label="Entrega" value={`R$ ${deliveryRate}`} />
                                <TextCustom label="Total" value={`R$ ${totalAsPay}`} bold />
                            </Gap>
                            <Button type="submit">confirmar pedido</Button>
                        </SectionRounded>
                    </div>
                </Flex>
            </Form>
        </Main>
    );
}

function transformValue(
    type: "INTEGER" | "REAL_VALUES",
    value: string | number
) {
    if (type == "INTEGER") {
        const newValue = String(value).replace(",", ".");
        return Number(newValue) as number;
    } else if (type == "REAL_VALUES") {
        value = Number(value).toFixed(2);
        const newValue = String(value).replace(".", ",");
        return newValue;
    } else {
        return 0;
    }
}
