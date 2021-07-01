import React from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import Card from './Card';

import Data from '../constants/data';

// Función para ir a la tienda cuando se presiona una card
const ItemList = ({irTienda}) => {

    const handleIrTienda = (valor) => {
        irTienda(valor);
       
        
    }

    return (
        <>
        
        <View style={styles.container}>
            {/* FlatList para traer la lista de tiendas en cards */}
            <FlatList
            data= {Data}
            renderItem = {
                data => {
                    return (
                        <>
                        
                        <Card >
                        <TouchableWithoutFeedback onPress={()=>handleIrTienda(1)}>
                            <View style={styles.card}>
                                <View>
                                    <Image source={{uri: 'https://dummyimage.com/50x50/000/fff'}}
                                    style={styles.image}
                                    />
                                </View>
                                <View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textName}  >{data.item.name}</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textDescription}>{data.item.description}</Text>
                                    </View>
                                </View>
                                <View style={styles.likeDistanceContainer}>
                                    <View>
                                    <Image source={require('../assets/images/like.png')} style={styles.imageLike}/>
                                    </View>
                                    <View>
                                    <Text style={styles.textDistance}>{data.item.distance}</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableWithoutFeedback>
                        </Card>
                        
                        </>
                    )
                }
            }
            keyExtractor={item => item.id}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 150,
       
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: 200
    },
    textName: {
        fontFamily: 'roboto-medium',
        fontSize: 20
    },
    textDescription:{
        fontFamily: 'roboto-regular',
        fontSize: 14,
    },
    textDistance: {
        fontFamily: 'roboto-light',
        fontSize: 15

    },
    likeDistanceContainer: {
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    imageLike: {
        width: 20,
        height: 20
    }
});

export default ItemList;