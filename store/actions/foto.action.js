import * as FileSystem from 'expo-file-system';
import { insertFoto, fetchFoto } from '../../db';

export const ADD_FOTO = 'ADD_FOTO'
export const LOAD_FOTO = 'LOAD_FOTO'

export const addFoto = ( image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
                
            });

            const result = await insertFoto (Path)
            console.log(result)

            dispatch({ type: ADD_FOTO, payload:  Path  });
        } catch (err) {
            console.log(err.mesage);
            throw err;
        }
    }
}

export const loadFoto = () => {
    return async dispatch => {
        try {
            const result = await fetchFoto();
            console.log (result);
            dispatch({type: LOAD_FOTO, foto: result.rows._array })
            console.log(foto)
        } catch (error) {
            throw error;
        }
    }
}