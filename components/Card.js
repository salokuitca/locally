import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Card = (props) => {
    return (
        <>
        <View style={{...styles.cardContainer, ...props.style}}>
            {props.children}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 15,
        padding: 15,
        margin: 5,
        backgroundColor: Colors.secondaryColor,
        
    }
});

export default Card;