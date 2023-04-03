import { Cardholder, ShoppingCartSimple } from "phosphor-react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { CartItem, useMarketContext } from "../../contexts/market"
import { IItem } from "../../services/CoffeeApi"
import { Form } from "../Form"
import { NumberInput } from "../NumberInput"

export function Card({ coffee }: { coffee: IItem }) {
    const { handleNewItemCart, cart } = useMarketContext();


    const methods = useForm()

    function handleNewItem({ quantity }: any) {
        const newItem: CartItem = {
            item: coffee,
            name: coffee.name,
            id: coffee.id,
            quantity
        }
        handleNewItemCart(newItem)
    }

    return (
        <CardContainer>
            <CardImage src={coffee.img} width={120} />
            <CardBody>
                <div style={{ display: "flex", gap: "0.25rem" }}>
                    {coffee.tags.map((ct => {
                        return <CardTag key={ct.id}>{ct.description}</CardTag>
                    }))
                    }
                </div>
                <CardTitle>{coffee.title}</CardTitle>
                <CardDescription>{coffee.description}</CardDescription>
            </CardBody>
            <CardFooter>
                <CardPrice>
                    <CurrencyPrice>{coffee.amount.currency}</CurrencyPrice>
                    <ValuePrice>{coffee.amount.value}</ValuePrice>
                </CardPrice>
                <Form methods={methods} onSubmit={handleNewItem}>
                    <CardButtonGroup>
                        <NumberInput name="quantity" />
                        <CartButton type="submit">
                            <ShoppingCartSimple weight="fill" width={22} height={22} />
                        </CartButton>
                    </CardButtonGroup>
                </Form>
            </CardFooter>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${props => props.theme.colors["base-card"]};
    align-items: center;
    border-radius: 6px 36px 6px 36px;
    width: 256px;
    height: 310px;

`
const CardImage = styled.img`
    margin-top: -2rem;
`

const CardTag = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors["yellow-light"]};
    padding: 6px;
    border-radius: 999px;
    
    color: ${props => props.theme.colors["yellow-dark"]};
    font-size: 10px;
    font-weight: 700;
    line-height: 130%; 
    text-align: center;
`

const CardTitle = styled.h1`
    color: ${props => props.theme.colors["base-subtitle"]};
    font-size: 20px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 26px; 
    margin-top: 1rem;
    text-align: center;
`
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`

const CardDescription = styled.h1`
    color: ${props => props.theme.colors["base-label"]};
    font-size: 14px;
    font-weight: 400;
    line-height: 130%; 
    margin-top: 0.5rem;
    text-align: center;
`

const CardFooter = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    gap: 1.5rem;
`

const CardPrice = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
`

const CurrencyPrice = styled.div`
    color: ${props => props.theme.colors["base-text"]};
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px; 
    text-align: center;
`
const ValuePrice = styled.div`
    font-family: 'Baloo 2', cursive; 
    font-size: 1.8rem;
    line-height: 18.2px; 
    font-weight: 800;
    color: ${props => props.theme.colors["base-text"]};
`

const CardButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`
const CartButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0;
    border-radius: 8px;
    background-color: ${props => props.theme.colors["purple-dark"]};
    color: ${props => props.theme.colors["white"]};

    &:hover {
        background-color: ${props => props.theme.colors["purple"]};
        cursor: pointer;
    }
    `
