import { Bank, CreditCard, Money } from "phosphor-react";
import styled from "styled-components";
import { useMarketContext } from "../../../contexts/market";
import { defaultTheme } from "../../../styles/themes/default";

interface Props {
  option: PaymantOptions;
}

export type PaymantOptions = "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO";

export function ButtonPayment({ option }: Props) {
  const { setPaymentSelected, paymentSelected } = useMarketContext();
  return (
    <ButtonPaymentContainer onClick={() => setPaymentSelected(option)} selected={option == paymentSelected}>
      {option == "CARTÃO DE CRÉDITO" && <><CreditCard width={22} height={22} color={defaultTheme.colors["purple"]} /><Label>CARTÃO DE CRÉDITO</Label></>}
      {option == "CARTÃO DE DÉBITO" && <><Bank width={22} height={22} color={defaultTheme.colors["purple"]} /><Label>CARTÃO DE DÉBITO</Label></>}
      {option == "DINHEIRO" && <><Money width={22} height={22} color={defaultTheme.colors["purple"]} /><Label>DINHEIRO</Label></>}
    </ButtonPaymentContainer>
  );
}

interface Props {
  selected?: boolean;
}

const ButtonPaymentContainer = styled.div<any>`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${(props) => !!props.selected ? props.theme.colors["purple-light"] : props.theme.colors["base-button"]};
  padding: 1rem 0  1rem  1rem;
  gap: 0.8rem;
  border-radius: 8px;
  border: 2px solid  ${props => !!props.selected ? props.theme.colors["purple"] : "transparent"};

  &:hover {
    cursor: pointer;
  }


`;


const Label = styled.div`
  font-size: 12px; 
  font-weight: 400;
  color: ${props => props.theme.colors["base-text"]};
`