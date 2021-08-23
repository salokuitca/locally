import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

const CartItem = ({item, onDelete, onAddCantidad, onRestarCantidad}) => {
    
    return (
        <>
        <View style={styles.item}>
        <View style={styles.detail}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={styles.header}>
                    
                    
                    <Text style={styles.text}>{item.name}</Text>
                    
                    
                    <View style={styles.cantidadContainer}>
                        <TouchableOpacity onPress={()=> onRestarCantidad(item)} style={styles.botonesCantidad}>
                            <View>
                            <Octicons name="dash" size={18} color="#333333" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textCantidadContainer}>
                        <Text style={styles.textCantidad}>{item.quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={()=> onAddCantidad(item)} style={styles.botonesCantidad}>
                            <View>
                            <Octicons name="plus" size={18} color="#333333" />
                            </View>
                        </TouchableOpacity>
                        
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
        padding: 3,
        paddingLeft: 10,
        height: 62
        
      },
      centrar: {
        alignSelf: 'center'
      },
      cantidadContainer: {
          width: 80,
          height: '43%',
          marginLeft: 10,
          paddingHorizontal: 5,
          marginVertical: 3,
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems:'center',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: 'grey',
          
          
      },
      botonesCantidad: {
        paddingLeft: 3,
        width: 20,
        alignSelf: 'center',
        justifyContent: 'center'
       

      },
      textCantidad:{
          textAlign: 'center',
          
          paddingHorizontal: 5,
          width: 25, 
      },
      textCantidadContainer:{
          height: '100%',
          backgroundColor: '#e5e5e5',
          justifyContent:'center',
          width: 25, 
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
          justifyContent: 'space-between',
          
      },
      text: {
        fontSize: 16,
        paddingBottom: 8,
      },
      image: {
          width: 99,
          height: 62
      },
      price: {
          paddingTop: 8,
      }
});

export default CartItem;