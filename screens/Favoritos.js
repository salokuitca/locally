import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectTienda } from '../store/actions/tiendas.action';
import TiendaMiniatura from '../components/TiendaMiniatura';
import Card from '../components/Card';

const Favoritos = ({navigation}) => {
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
        <View>
            {
                tiendas.map ((tienda, index) => {
                    if (tienda.favourite === true) {
                        return (
                            
                            <Card key={index}>
                                <TiendaMiniatura item={tienda} onSelected={handleSelected}/>
                            </Card>
                        )
                    }
                    
                })
            }
        </View>
        </>
    )
}

const styles = StyleSheet.create({

});

export default Favoritos;