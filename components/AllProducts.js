import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Card from './Card';

const AllProducts = () => {
    return (
        <>
        {/* Card contenedora de la pantalla */}
        <Card >
            {/* Encabezado de la card */}
            <View style={styles.encabezadoCard}>
                <Text style={styles.textTitulo}>Todos los Productos</Text>
            </View>
            {/* Imágenes de los productos */}
            <View style={styles.container}>
                
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
                <View style={styles.imageProductosContainer}>
                    <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                    style={styles.imageProductos}
                    />
                </View>
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