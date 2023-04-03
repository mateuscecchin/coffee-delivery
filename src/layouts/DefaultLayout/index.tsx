import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <ScrollView>
                <Outlet />
            </ScrollView>
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
 
`
const ScrollView = styled.div`
   overflow-y: auto;
     &::-webkit-scrollbar {
        width: 0px;
        border: 1px solid black;
    }
`