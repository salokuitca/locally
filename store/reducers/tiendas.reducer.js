import { TIENDAS } from "../../data/tiendas";
import { SELECT_TIENDA } from "../actions/tiendas.action";

const INITIAL_STATE = {
    listTiendas: TIENDAS,
    selected: null,
}

const TiendasReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        // Selección de tienda
        case SELECT_TIENDA:
            const tiendaIndex= state.listTiendas.findIndex (tienda => tienda.id === action.tiendaID);
            if (tiendaIndex === -1) return {...state};
            return {
                ...state,
                selected: state.listTiendas[tiendaIndex]
            }
        default:
            return {...state};
    }
}

export default TiendasReducer;