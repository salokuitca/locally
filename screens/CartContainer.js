import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, confirmCart } from '../store/actions/cart.action';
import CartItem from '../components/CartItem';
import Colors from '../constants/colors';


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
            <Button title="ENVIAR PEDIDO" onPress={handleConfirmCart} color={Colors.buttonPrimary}/>
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
    }
});

export default CartContainer;