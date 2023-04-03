import { CartItem } from "../../contexts/market";

export enum ActionsType {
    NEW_ITEM_CART = "NEW_ITEM_CART",
    REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
    UPDATE_ATTRIBUTE_ITEM = "UPDATE_ATTRIBUTE_ITEM",
    CLEAR_CART = "CLEAR_CART"
}

export function cartReducer(state: CartItem[], action: any) {
    const { payload, type } = action;

    if (type == ActionsType.NEW_ITEM_CART) {
        const includesId = state.some((item) => item.id == payload.id);

        if (includesId) { // verifica se ja tem este item no carrinho, se ja tiver, substituio item, se não, adiciona o novo item.
            const newList = state.filter((item) => item.id != payload.id);
            const newState: CartItem[] = [...newList, payload];

            return newState;
        } else {
            const notQuantity = payload.quantity == 0
            const newState = notQuantity ? {...payload, quantity: 1} : payload // verifica se tem quantity

            return [...state, newState];
        }
    } else if (type == ActionsType.REMOVE_ITEM_CART) {
        const newState: CartItem[] = state.filter((item) => item.id != payload.id);

        return newState;
    } else if (type == ActionsType.UPDATE_ATTRIBUTE_ITEM) {
        const newState = state.map((item: any) => {
            if (payload.id == item.id) {
                item[payload.attribute] = payload.value;
                return item;
            } else {
                return item;
            }
        });

        return newState;
    } else if (type == ActionsType.CLEAR_CART) {
        return [] as CartItem[];
    } else {
        return state;
    }
}