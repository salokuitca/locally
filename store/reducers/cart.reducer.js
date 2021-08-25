import { ADD_ITEM, DELETE_ITEM, CONFIRM_CART, ADD_CANTIDAD, RESTAR_CANTIDAD, DELETE_CART, GET_DB } from "../actions/cart.action";

const INITIAL_STATE = {
    items: [],
    total: 0,
    confirm: false,
    
};

const sumTotal = list => list
.map (item => item.quantity * item.price)
.reduce((a, b) => a + b, 0)

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const indexItem = state.items.findIndex (item => item.id === action.item.id);

            if (indexItem === -1) {
              const item = {...action.item, quantity: 1};
              const updated = state.items.concat(item);

              return {
                ...state,
                items: updated,
                total: sumTotal(updated)
              }
            } 

            const updated = state.items.map(item => {
              if (item.id === action.item.id) item.quantity ++;
              return item;
            })
            // const indexItem = state.items.findIndex (item => item.id === action.item.id);

            // if (indexItem === -1) {
            //   const item = {...action.item, quantity: 1};
            //   const updated = state.items.concat(item);

            //   return {
            //     ...state,
            //     items: updated,
            //     total: sumTotal(updated)
            //   }
            // } 

            // const updated = state.items.map(item => {
            //   if (item.id === action.item.id) item.quantity ++;
            //   return item;
            // })

            return {
              ...state,
              items: updated,
              total: sumTotal(updated),
            };

        case DELETE_ITEM:
            const cleanCart = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: cleanCart,
                total: sumTotal(cleanCart),
            }
        case ADD_CANTIDAD:
          
          const updatedCantidad = state.items.map(item => {
            if (item.id === action.item.id) item.quantity ++;
            
            return item;
          })
          
          return {
            ...state,
            items: updatedCantidad,
            total: sumTotal(updatedCantidad),
          };
        case RESTAR_CANTIDAD:
          const updatedCantidadRestar = state.items.map(item => {
            if ((item.id === action.item.id) && (item.quantity===1)) {
              item.quantity = 1
            } else if (item.id === action.item.id) {
              item.quantity --;
            }
            
            return item;
          })
          
          return {
            ...state,
            items: updatedCantidadRestar,
            total: sumTotal(updatedCantidadRestar),
          };
        case DELETE_CART:
          return {
            items: [],
            total: 0,
            confirm: false,
          }
        default:
            return state;
    }
}

export default CartReducer;