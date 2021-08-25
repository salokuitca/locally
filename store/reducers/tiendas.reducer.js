import { TIENDAS } from "../../data/tiendas";
import { SELECT_TIENDA, LIKE_TIENDA } from "../actions/tiendas.action";

const INITIAL_STATE = {
    listTiendas: TIENDAS,
    selected: null,
    
    
}

const TiendasReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        // Selección de tienda
        case SELECT_TIENDA:
            const tiendaIndex= state.listTiendas.findIndex (tienda => tienda.id === action.tiendaID);
            if (tiendaIndex === -1) {return {...state};}
            return {
                ...state,
                selected: state.listTiendas[tiendaIndex]
            }
        case LIKE_TIENDA:
            
            
            const tiendaIndexLike= state.listTiendas.findIndex (tienda => tienda.id === action.tiendaID);
            
            
            const newTienda = state.listTiendas.map (tienda => {
                if (tienda.id === state.listTiendas[tiendaIndexLike].id) {
                    tienda.favourite = !tienda.favourite
                }
                return tienda
            })
                       
            
            return {
                ...state,
                listTiendas: newTienda
                
                
            }
        default:
            return {...state};
    }
}

export default TiendasReducer;