import { Ball, ButtonGroupContainer, ButtonLocation, ButtonMarket, HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg"
import { MapPin } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { ShoppingCart } from "phosphor-react";
import { Navigate, NavLink } from "react-router-dom";
import { useMarketContext } from "../../contexts/market";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={Logo} style={{ flex: 1 }} />
            </NavLink>
            <ButtonGroupContainer>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <ButtonLocation>
                        <MapPin width={20} height={20} color={defaultTheme.colors["purple"]} weight="fill" />
                        <h1 style={{ fontSize: 14 }}>Pimenta Bueno, RO</h1>
                    </ButtonLocation>
                </NavLink>
                <NavLink to="/checkout">
                    <ButtonMarket>
                        <NotificationCart />
                        <ShoppingCart width={20} height={20} weight="fill" />
                    </ButtonMarket>
                </NavLink>
            </ButtonGroupContainer>
        </HeaderContainer>
    )
}

function NotificationCart() {
    const { cart } = useMarketContext();
    if (cart.length == 0) return <></>
    return (
        <Ball>{cart.length}</Ball>
    )
}