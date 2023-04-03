import { Icon, ShoppingCart } from "phosphor-react"
import styled, { DefaultTheme } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { CircleFill, InfoItemContainer, LabelInfoItem } from "./styles";

interface InfoItem {
    icon: Icon;
    children: React.ReactNode;
    color: string;
}

export function InfoItem({ icon: Icon, children, color }: InfoItem) {
    return (
        <InfoItemContainer>
            <CircleFill color={color}>
                <Icon width={20} height={20} color="white" weight="fill" />
            </CircleFill>
            <LabelInfoItem>{children}</LabelInfoItem>
        </InfoItemContainer>
    )
}

