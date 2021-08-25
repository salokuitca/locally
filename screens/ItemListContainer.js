import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { selectTienda } from '../store/actions/tiendas.action';
import Card from '../components/Card';
import TiendaMiniatura from '../components/TiendaMiniatura';




const ItemListContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const tiendas = useSelector (state => state.tiendas.listTiendas);
    
 
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
                                
                                <TiendaMiniatura item ={data.item} onSelected={handleSelected} />
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