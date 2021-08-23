import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct, selectProduct } from '../store/actions/products.action';

const AllProducts = ({navigation}) => {
    const dispatch = useDispatch();
    const product = useSelector (state => state.products.filteredProducts);
    const tienda = useSelector (state => state.tiendas.selected)

    useEffect (() => {
        dispatch(filterProduct(tienda.id))
    },[])

    const handleSelected = (product) => {
        dispatch(selectProduct(product.id))
        navigation.navigate('ItemDetail', {
            name: product.name,
        });
    }

    const handleClose = () => navigation.goBack();

    return (
        <>
        {/* Card contenedora de la pantalla */}
        <Card >
            {/* Encabezado de la card */}
            <View style={styles.encabezadoCard}>
                <Text style={styles.textTitulo}>Todos los productos</Text>
                <TouchableOpacity onPress={() => handleClose()}>
                    <Image source={require('../assets/images/iconClose.png')} style={styles.iconoClose}/>
                </TouchableOpacity>
            </View>
            {/* Imágenes de los productos */}
            <View style={styles.container}>
                {
                    product.map ((product, index) => {
                        return (
                            <TouchableOpacity style={styles.imageProductosContainer} onPress={()=>{handleSelected(product)}} key={index}>
                                <View>
                                    <Image source={{uri: product.image}}
                                    style={styles.imageProductos}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                
                
            </View>
        </Card>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    encabezadoCard: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(69, 123, 157, 0.2)',
        color: 'black', 
    },
    textTitulo:{
        fontFamily: 'roboto-medium',
        fontSize: 16
    },
    imageProductosContainer: {
        width:'33%',
        marginVertical: 3,
        paddingHorizontal: 3,
        borderWidth: 0,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 15,

        elevation: 2,
           
    },
    imageProductos: {
        width: '100%',
        height: 100,
        borderRadius: 15 
    }
});

export default AllProducts;