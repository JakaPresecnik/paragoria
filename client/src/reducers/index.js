import { ADD_ITEM, ADD_ITEM_AMOUNT, REMOVE_ITEM, REMOVE_ITEM_AMOUNT } from '../actions/merchStoreAction';

export default function merchStore(state = { shoppingCart: {} }, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                    shoppingCart: {
                        ...state.shoppingCart,
                           [action.item.id]: action.item,
                    }
            }

        case ADD_ITEM_AMOUNT:
            return {
                ...state,
                    shoppingCart: {
                        ...state.shoppingCart,
                            [action.item.id]: {
                                ...action.item,
                                    amount: state.shoppingCart[action.item.id].amount + 1
                            }
                    }
            }

        case REMOVE_ITEM:
            const {[action.id]:_, ...rest} = state.shoppingCart;
            return {
                ...state,
                    shoppingCart: { ...rest }
            }

        case REMOVE_ITEM_AMOUNT:
            return {
                ...state,
                    shoppingCart: {
                        ...state.shoppingCart,
                            [action.item.id]: {
                                ...action.item,
                                    amount: state.shoppingCart[action.item.id].amount - 1
                            }
                    }
            }
            
        default:
            return state
    }
}