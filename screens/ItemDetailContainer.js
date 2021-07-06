import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ItemDetail from '../components/ItemDetail';
import Colors from '../constants/colors';


const ItemDetailContainer = () => {
    return (
        <>
        <View style={styles.screen}>
            <ItemDetail/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    }
});

export default ItemDetailContainer;