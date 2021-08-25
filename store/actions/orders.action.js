import {DB_API_URL} from '@env';

export const GET_ORDERS = 'GET_ORDERS';
export const DELETE_ORDER ='DELETE_ORDER';

const orderByUserID = (data, user) => {
    const items = [];
    // Convertir el objeto a un arreglo
    Object.keys(data).forEach(key => items.push({ id: key, ...data[key] }));
    // Filtrar el arreglo (solo las ordenes del usuario)
    
    return items.filter(item => item.user === user);
  }

  export const getOrders = (user) => {
      
    return async dispatch => {
      try {
        const response = await fetch(`${DB_API_URL}/carrito.json`);
        const result = await response.json();
        
        const items = orderByUserID(result, user);
        
        dispatch({ type: GET_ORDERS, payload: items });
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  export const deleteOrder = (id) => {
    return async dispatch => {
      try {
        await fetch(`${DB_API_URL}/carrito/${id}.json`, {
          method: 'DELETE',
        });
        dispatch({ type: DELETE_ORDER, order: id });
      } catch (err) {
        console.log(err.message);
      }
    }
  }