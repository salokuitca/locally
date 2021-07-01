import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TiendaDetail from '../components/TiendaDetail';
import Colors from '../constants/colors';

const TiendaDetailContainer = ({irListaTiendas}) => {
    return (
        <>
        {/* Container de la Tienda */}
        <View style={styles.screen}>
        <TiendaDetail irListaTiendas={irListaTiendas}></TiendaDetail>
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