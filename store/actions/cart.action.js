export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';
import { URL_API } from "../../constants/database";

export const addItem = item => ({
    type: ADD_ITEM,
    item,
});

export const deleteItem = itemID => ({
    type: DELETE_ITEM,
    itemID,
});

export const confirmCart = (payload) => {
    return async (dispatch) => {
        try {
            const response = await fetch (`${URL_API}/carrito.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    date: Date.now(),
                    items: {...payload},
                })
            })
            console.log(response)
            dispatch({
                type: CONFIRM_CART,
                confirm: true,
            })
        } catch {
            console.log (error.message)
        }
    }
}