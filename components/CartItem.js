import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Color from '../constants/colors';
import { Ionicons } from '@expo/vector-icons'; 

const CartItem = ({item, onDelete}) => {
    
    return (
        <>
        <View style={styles.item}>
        <View style={styles.detail}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={styles.header}>
                    <Text style={styles.text}>{item.name}</Text>
                    <View>
                        <Text>Cantidad: {item.quantity}</Text>
                    </View>
                </View>
            </View>
                <View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="ios-close-circle" size={24} color="black" />
                </TouchableOpacity>
                
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                
            </View>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      },
      header: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        padding: 7,
      },
      detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      container: {
          flexDirection: 'row',
          justifyContent: 'space-around'
      },
      text: {
        fontSize: 16,
        paddingBottom: 8,
      },
      image: {
          width: 99,
          height: 56
      },
      price: {
          paddingTop: 8,
      }
});

export default CartItem;