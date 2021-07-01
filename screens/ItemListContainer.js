import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ItemList from '../components/ItemList';
import Colors from '../constants/colors';

const ItemListContainer = () => {
    return (
        <>
        <View style={styles.screen}>
            <ItemList/>
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