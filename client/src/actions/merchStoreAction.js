export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_AMOUNT = 'ADD_ITEM_AMOUNT';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM_AMOUNT = 'REMOVE_ITEM_AMOUNT';
export const EMPTY_CART = 'EMPTY_CART';

export function addItem (item) {
    return {
        type: ADD_ITEM,
        item
    }
}

export function addItemAmount (item) {
    return {
        type: ADD_ITEM_AMOUNT,
        item
    }
}

export function removeItem (id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export function removeItemAmount (item) {
    return {
        type: REMOVE_ITEM_AMOUNT,
        item
    }
}

export function emptyCart () {
    return {
        type: EMPTY_CART
    }
}