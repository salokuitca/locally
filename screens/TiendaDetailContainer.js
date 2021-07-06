import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TiendaDetail from '../components/TiendaDetail';
import Colors from '../constants/colors';

const TiendaDetailContainer = ({navigation}) => {
    return (
        <>
        {/* Container de la Tienda */}
        <View style={styles.screen}>  
        
        <TiendaDetail navigation={navigation}/>
        </View>
        </>
    )
}

const styles= StyleSheet.create ({
    screen: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    }
});

export default TiendaDetailContainer;