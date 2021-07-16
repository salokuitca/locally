import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectProduct } from '../store/actions/products.action';
import Card from '../components/Card';
import Colors from '../constants/colors';


const ItemDetailContainer = () => {
    const product = useSelector (state => state.products.selected)
    return (
        <>
        <View style={styles.screen}>
             {/* Card que contiene todo el contenido de la pantalla */}
            <Card style={styles.cardContainer}>
            {/* Encabezado de la card */}
            <View style={styles.encabezadoCard}>
                <Text style={styles.textTitulo}>{product.name}</Text>
                <Image source={require('../assets/images/iconClose.png')} style={styles.iconoClose}/>
            </View>
            {/* Imagen del producto */}
            <View style={styles.imagePrincipalContainer}>
                <Image source={{uri: product.image}}
                            style={styles.image}
                            />
            </View>
            {/* Botón para agregar al Cart + precio */}
            <View style={styles.containerAgrgarCartPrecio}>
                <View style={styles.agregarCartContainer}>
                    <Text style={styles.textButton}>AGREGAR AL CARRITO</Text
                    >
                    <View>
                            <Image source={require('../assets/images/cartWhite.png')} style={styles.iconosCart}/>
                        </View>
                    
                </View>
                <View>
                    <Text style={styles.precio}>{product.price}</Text>
                </View>
            </View>
            {/* Descripción del producto */}
            <Text style={styles.textDescripcionTitulo}>Descripción del Producto:</Text>
            <Text style={styles.textDescripcion}>{product.principalDescription}</Text>
            
            </Card>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    },
    cardContainer: {
        
        marginTop: 10,
        height: '95%'
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
    iconoClose:{
        height: 20,
        width: 20
    },
    imagePrincipalContainer:{
       alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius:15,
    },
    containerAgrgarCartPrecio: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    agregarCartContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        width: 217,
        height: 36,
        backgroundColor: Colors.buttonPrimary,
        borderRadius: 5
        
    },
    textButton: {
        color: Colors.agregarCart,
        padding: 10,
        fontFamily: 'roboto-medium',
        fontWeight: 'bold',
        fontSize: 14
    },
    iconosCart:{
        height:18,
        width: 18
    },
    precio: {
        fontFamily: 'roboto-medium',
        fontSize: 25
    },
    textDescripcionTitulo: {
        marginTop: 30,
        fontFamily: 'roboto-medium',
        fontSize: 16,
        letterSpacing: 0.15,
        lineHeight: 24
    },
    textDescripcion:{
        fontFamily: 'roboto-light',
        fontSize: 16,
        letterSpacing: 0.15,
        lineHeight: 24
    }
});

export default ItemDetailContainer;