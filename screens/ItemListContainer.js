import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ItemList from '../components/ItemList';
import Colors from '../constants/colors';

const ItemListContainer = ({navigation}) => {
   
    return (
        <>
        {/* Container de la lista de tiendas */}
        <View style={styles.screen}>
            
            <ItemList navigation={navigation}/>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    screen: {
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    }
});

export default ItemListContainer;