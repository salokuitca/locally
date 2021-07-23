import { ADD_ITEM, DELETE_ITEM, CONFIRM_CART } from "../actions/cart.action";

const INITIAL_STATE = {
    items: [],
    total: 1,
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const updated = state.items.concat(action.item)
            return {
                ...state,
                items: updated,
            }
        case DELETE_ITEM:
            const cleanCart = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: cleanCart,
            }
        default:
            return state;
    }
}

export default CartReducer;