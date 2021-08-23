export const ADD_ITEM = 'ADD_ITEM';
export const ADD_CANTIDAD= 'ADD_CANTIDAD'
export const RESTAR_CANTIDAD='RESTAR_CANTIDAD'
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_CART = 'DELETE_CART';
export const CONFIRM_CART = 'CONFIRM_CART';
import { DB_API_URL } from "@env";

export const addItem = item => ({
    type: ADD_ITEM,
    item,
});

export const addCantidad = item => ({
    type: ADD_CANTIDAD,
    item,
});

export const restarCantidad = item => ({
    type: RESTAR_CANTIDAD,
    item,
})

export const deleteItem = itemID => ({
    type: DELETE_ITEM,
    itemID,
});

export const deleteCart = () => ({
    type: DELETE_CART
})

export const confirmCart = (payload) => {
    return async (dispatch) => {
        try {
            const response = await fetch (`${DB_API_URL}/carrito.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    date: Date.now(),
                    items: {...payload},
                })
            })
            // console.log(response)
            dispatch({
                type: CONFIRM_CART,
                confirm: true,
            })
        } catch {
            console.log (error.message)
        }
    }
}