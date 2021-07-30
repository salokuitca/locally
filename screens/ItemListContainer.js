import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { selectTienda, likeTienda } from '../store/actions/tiendas.action';
import Card from '../components/Card';
import TiendaMiniatura from '../components/TiendaMiniatura';




const ItemListContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const tiendas = useSelector (state => state.tiendas.listTiendas);
    const like = useSelector (state => state.tiendas.like);
    const likeSelected = useSelector (state => state.tiendas.likeSelected);
    const handleSelected = (item) => {
        dispatch(selectTienda(item.id)),
        navigation.navigate('TiendaDetail', {
            name: item.name,
        })
    }
    const handleLike = (item) => {
        dispatch(likeTienda(item.id));
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
                                
                                <TiendaMiniatura item ={data.item} onSelected={handleSelected} onLike={handleLike} like={like} likeSelected={likeSelected}/>
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
   
});

export default ItemListContainer;