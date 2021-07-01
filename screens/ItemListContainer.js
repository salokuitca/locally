import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ItemList from '../components/ItemList';
import Colors from '../constants/colors';

const ItemListContainer = ({irTienda}) => {
   
    return (
        <>
        {/* Container de la lista de tiendas */}
        <View style={styles.screen}>
            
            <ItemList irTienda={irTienda}/>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    }
});

export default ItemListContainer;