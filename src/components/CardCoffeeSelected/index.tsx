import { Trash } from "phosphor-react"
import styled from "styled-components"
import { CartItem, useMarketContext } from "../../contexts/market"
import { defaultTheme } from "../../styles/themes/default"
import { NumberInput } from "../NumberInput"

export function CardCoffeeSelected({ cart }: { cart: CartItem }) {
    const { item: coffee } = cart
    const { handleRemoveItemCard, handleUpdateItemQuantity } = useMarketContext()

    function handleRemove() {
        handleRemoveItemCard({ id: coffee.id })
    }

    function handlePlus(value: any) {
        handleUpdateItemQuantity({ id: coffee.id, value })
    }

    function handleMinus(value: any) {
        handleUpdateItemQuantity({ id: coffee.id, value })
    }


    return (
        <Container>
            <Image src={coffee.img} />
            <div>
                <Heading>{coffee.title}</Heading>
                <ControllerContainer>
                    <NumberInput name={coffee.name} onPlus={handlePlus} onMinus={handleMinus} />
                    <ButtonRemove onClick={() => handleRemove()}>
                        <Trash width={16} height={16} color={defaultTheme.colors["purple"]} />
                        <Label>REMOVER</Label>
                    </ButtonRemove>
                </ControllerContainer>
            </div>
            <AmountLabel>{coffee.amount.currency} {coffee.amount.value}</AmountLabel>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`

const Image = styled.img`
    width:64px;
    height: 64px;
    margin-right: 1.3rem;
`

const ControllerContainer = styled.div`
 display: flex;
 gap: 1rem;
`

const Heading = styled.div`
  font-size: 16px; 
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: ${props => props.theme.colors["base-subtitle"]};
`

const Label = styled.div`
  font-size: 12px; 
  font-weight: 400;
  color: ${props => props.theme.colors["base-text"]};
`

const ButtonRemove = styled.button`
    display: flex;
    border: 0px;
    background: ${props => props.theme.colors["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`

const AmountLabel = styled.h2`
  font-size: 16px; 
  font-weight: 700;
  color: ${props => props.theme.colors["base-text"]};
  margin-left: 3rem;
`