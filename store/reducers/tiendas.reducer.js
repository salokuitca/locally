import { TIENDAS } from "../../data/tiendas";
import { SELECT_TIENDA, LIKE_TIENDA } from "../actions/tiendas.action";

const INITIAL_STATE = {
    listTiendas: TIENDAS,
    selected: null,
    like: false,
    likeSelected: [],
    
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
            if (tiendaIndexLike === -1) {
                const notLike= {...state.listTiendas[tiendaIndexLike], like: false}
                return {
                    ...state,
                    likeSelected: notLike,
                }
            }
            const opuestoLike = state.like;
            const itemLike = {...state.listTiendas[tiendaIndexLike], likeItem: !opuestoLike}            
            
            return {
                ...state,
                like: !opuestoLike,
                likeSelected: itemLike,
                
            }
        default:
            return {...state};
    }
}

export default TiendasReducer;