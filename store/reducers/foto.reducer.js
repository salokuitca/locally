  
import { ADD_FOTO, LOAD_FOTO } from '../actions/foto.action';


const initialState = {
    foto: null
}



const FotoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FOTO:
            const newFoto = action.payload            
            return {
                ...state,
                foto: newFoto,
            };
        case LOAD_FOTO:     
        if (action.foto[action.foto.length-1] !== undefined) {
            return {
                ...state,
                foto: action.foto[action.foto.length-1].image,
            }
        }
       
        default:
            return state;
    }
}

export default FotoReducer;