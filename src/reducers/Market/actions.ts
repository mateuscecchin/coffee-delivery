import { CartItem } from "../../contexts/market";
import { ActionsType } from "./marketReducer";

export function newItemCart(newItemCart: CartItem) {
    return { type: "NEW_ITEM_CART", payload: newItemCart } 
}

export function removeItemCart(id: number) {
    return { type:  ActionsType.REMOVE_ITEM_CART, payload: { id } }
}

export function updateItemAttribute({id, value, attribute}:  {
    id: number;
    value: number;
    attribute: keyof CartItem
}) {
    return { type: "UPDATE_ATTRIBUTE_ITEM", payload: { id, attribute, value  } }
}

export function clearCart() {
    return { type: "CLEAR_CART" }
}