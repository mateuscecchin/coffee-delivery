import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { PaymantOptions } from "../pages/Checkout/components/ButtonPayment";
import { IItem } from "../services/CoffeeApi";
import { cartReducer } from "../reducers/Market/marketReducer";
import { clearCart, newItemCart, removeItemCart, updateItemAttribute } from "../reducers/Market/actions";

interface MarketData {
    setPaymentSelected: (payment: PaymantOptions) => void;
    handleNewItemCart: ({ item, quantity }: Omit<CartItem, "id">) => void;
    handleRemoveItemCard: ({ id }: { id: number }) => void;
    handleNewAddressInfo: (address: AddressInfo) => void;
    handleClearCart: () => void;
    handleUpdateItemQuantity: ({
        id,
        value,
    }: {
        id: number;
        value: number;
    }) => void;
    addressInfo: AddressInfo;
    paymentSelected?: PaymantOptions;
    cart: CartItem[];
}
export interface CartItem {
    id: number;
    name: string;
    item: IItem;
    quantity: number;
}

export interface AddressInfo {
    cep: string;
    rua: string;
    numero: number;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}

const MarketContext = createContext({} as MarketData);

export function MarketProvider({ children }: PropsWithChildren) {
    const [paymentSelected, setPaymentSelected] = useState<PaymantOptions>();
    const [addressInfo, setAddressInfo] = useState<AddressInfo>(
        {} as AddressInfo
    );
    const [cart, dispatch,] = useReducer(cartReducer, [], (initialState) => {
        const parsedCart = localStorage.getItem('@coffee-delivery:cart-state',)
        if (parsedCart) {
            return JSON.parse(parsedCart)
        }
        return initialState
    });

    useEffect(() => {
        const cartJSON = JSON.stringify(cart)
        localStorage.setItem('@coffee-delivery:cart-state', cartJSON)
    }, [cart])

    function handleNewItemCart({ item, quantity }: Omit<CartItem, "id">) {
        const id = item.id;
        const name = item.name;
        const newItemToCart: CartItem = {
            id,
            name,
            item,
            quantity,
        };
        dispatch(newItemCart(newItemToCart));
    }

    function handleRemoveItemCard({ id }: { id: number }) {
        dispatch(removeItemCart(id));
    }

    function handleUpdateItemQuantity({
        id,
        value,
    }: {
        id: number;
        value: number;
    }) {
        dispatch(updateItemAttribute({ id, attribute: "quantity", value }));
    }

    function handleClearCart() {
        dispatch(clearCart());
    }

    function handleNewAddressInfo(address: AddressInfo) {
        setAddressInfo(address);
    }

    return (
        <MarketContext.Provider
            value={{
                cart,
                paymentSelected,
                addressInfo,
                handleNewAddressInfo,
                setPaymentSelected,
                handleNewItemCart,
                handleRemoveItemCard,
                handleUpdateItemQuantity,
                handleClearCart,
            }}
        >
            {children}
        </MarketContext.Provider>
    );
}

export function useMarketContext() {
    return useContext(MarketContext);
}
