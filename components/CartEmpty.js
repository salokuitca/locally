import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CartEmpty = () => {
    return (
        <>
        <View style={styles.container}>
            <Text>TU CARRITO ESTA VACÍO :(</Text>
            <Image 
                source={require('../assets/cartEmpty.png')}
                style={styles.cartEmptyImage}
            />
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartEmptyImage: {
        marginVertical:  5,
        width: 70,
        height: 70
    }
});

export default CartEmpty;