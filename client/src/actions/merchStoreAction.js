export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_AMOUNT = 'ADD_ITEM_AMOUNT';

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