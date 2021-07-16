import React from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { selectTienda } from '../store/actions/tiendas.action';
import Card from '../components/Card';
import Colors from '../constants/colors';



const ItemListContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const tiendas = useSelector (state => state.tiendas.listTiendas)
    const handleSelected = (item) => {
        dispatch(selectTienda(item.id)),
        navigation.navigate('TiendaDetail', {
            name: item.name,
        })
    }
    
    return (
        <>
        {/* Container de la lista de tiendas */}
        <View style={styles.screen}>
            <View style={styles.container}>
                {/* FlatList para traer la lista de tiendas en cards */}
                <FlatList
                data= {tiendas}
                renderItem = {
                    data => {
                        return (
                            <>
                            
                            <Card >
                            <TouchableWithoutFeedback onPress={() => handleSelected(data.item)}>
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
            
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    screen: {
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    },
    container: {
        height:'100%'
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

export default ItemListContainer;