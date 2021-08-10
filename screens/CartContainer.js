import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, confirmCart } from '../store/actions/cart.action';
import CartItem from '../components/CartItem';
import Colors from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons'; 


const CartContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector (state => state.cart.items);
    const total = useSelector (state => state.cart.total);

    const handleDeleteItem = (id) => dispatch(deleteItem(id));
    const handleConfirmCart = () => dispatch(confirmCart(items));

    const renderItem = (data) => {
        return (
            <CartItem item= {data.item} onDelete={handleDeleteItem}/>
        )
    }
    return (
        <>
         <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data= {items}
                    KeyExtractor = {item => item.id}
                    renderItem = {renderItem}
                />
            </View>
            <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={handleConfirmCart}>
                <Text style={styles.textButton}>ENVIAR PEDIDO</Text>
                <MaterialIcons name="shopping-bag" size={24} color={Colors.agregarCart}/>
            </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>${total}</Text>
            </View>
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
        borderTopColor: '#ccc',
        borderTopWidth: 1,
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