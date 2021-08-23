import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, confirmCart, addCantidad, restarCantidad, deleteCart } from '../store/actions/cart.action';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
import Colors from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons'; 


const CartContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector (state => state.cart.items);
    const total = useSelector (state => state.cart.total);
    const user = useSelector (state => state.auth.user);
    
    const handleDeleteItem = (id) => dispatch(deleteItem(id));
    const handleConfirmCart = () => {
        dispatch(confirmCart(items, user));
        Alert.alert(
            'PEDIDO ENVIADO',
            'El vendedor se contactará contigo a la brevedad',
            [{ text: 'Ok' }],
          );
          dispatch(deleteCart())
    };

    

    const handleAddCantidad = (item) => dispatch(addCantidad(item))
    const handleRestarCantidad = (item) => dispatch(restarCantidad(item))

    const renderItem = (data) => {
        return (
            <CartItem item= {data.item} onDelete={handleDeleteItem} onAddCantidad={handleAddCantidad} onRestarCantidad={handleRestarCantidad} />
        )
    }
    return (
        <>
        
         <View style={styles.container}>
            { 
            items.length
                ? 
                <>
                    <View style={styles.list}>
                    <FlatList
                        data= {items}
                        KeyExtractor = {item => item.id}
                        renderItem = {renderItem}
                    />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={handleConfirmCart}>
                        <Text style={styles.textButton}>ENVIAR PEDIDO</Text>
                        <MaterialIcons name="shopping-bag" size={24} color={Colors.agregarCart}/>
                    </TouchableOpacity>
                    </View>
                   
                </>
                : <CartEmpty/>
            }
            
        </View>

        </>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 12,
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    list: {
        flex: 8,
    },
    text: {
        padding: 8,
    },
    containerButton: {
        alignItems: 'center'
    },
    button: {
        marginBottom: 25,
        width:205,
        height: 42,
        backgroundColor: Colors.buttonPrimary,
        borderRadius: 4,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textButton:{
        color: Colors.agregarCart,
        fontFamily: 'roboto-regular',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 37,
               
    },
    // bag: {
    //     marginLeft: 10,
    // },
});

export default CartContainer;