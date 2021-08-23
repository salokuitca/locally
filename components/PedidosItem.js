import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const PedidosItem = ({item, onDelete})  => {
    const formatDate = time => {
        const date = new Date(time);
        return date.toLocaleDateString();
      }
      
      const sumTotal = list => list
        .map(item => item.quantity * item.price)
        .reduce((a, b) => a + b, 0)

      const sumQuantity = list => list
        .map(item => item.quantity)
        .reduce((a,b) => a+b,0)
        
    return (
        <>
        
        <View style={styles.container}>
            <View>
            <Text>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.precio}>
                <Text style={styles.text}>{sumQuantity(item.items)} productos</Text>
                <Text>${sumTotal(item.items)}</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
                <Ionicons size={16} color="white" name="md-trash" />
            </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    
      container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          height: 80,
        //   borderBottomColor: Colors.tabBar,
        //   borderBottomWidth: 1,
        shadowColor: Colors.tabBar,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        backgroundColor: 'white',
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
          
      },
      precio:{
          flexDirection:'row',
          justifyContent: 'space-between'
      },
      text: {
          paddingRight: '10%'
      },
      button: {
        backgroundColor: Colors.buttonPrimary,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
});

export default PedidosItem;