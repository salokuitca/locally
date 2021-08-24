import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableWithoutFeedback, FlatList, TouchableOpacity, Linking} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import Colors from '../constants/colors';
import { filterProduct, selectProduct } from '../store/actions/products.action';


const TiendaDetailContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const item = useSelector (state => state.tiendas.selected);
    const products = useSelector (state => state.products.filteredProducts)
    const tienda = useSelector (state => state.tiendas.selected);

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
            {/* Container de la Tienda */}
            <View style={styles.screen}>
            {/* Para generar el scroll */}
            <ScrollView>
            {/* Contenedor del componente */}
            <View style={styles.card}>
                {/* Card superior donde se presenta la tienda a la que entró el usuario
                y la X como opción para volver a la pantalla anterior */}
                <Card >
                    <View style={styles.containerSuperiorCard}>
                        <View>
                            <Image source={{uri: item.image}}
                            style={styles.image}
                            />
                        </View>
                        <View>
                            <View style={styles.textContainer}>
                                <Text style={styles.textName}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.textSubtitulo}>{item.description}</Text>
                            </View>
                        </View>
                        <TouchableWithoutFeedback onPress={()=> handleClose()}>
                        <View>
                            <View>
                            <Image source={require('../assets/images/iconClose.png')} style={styles.iconoClose}/>
                            </View>
                            <View>
                                <Text></Text>
                            </View>

                        </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.descripcionTienda}>
                        <Text style={styles.textDescripcionTienda}>{item.longDescription}</Text>
                    </View>
                    
                </Card>
                {/* Card promociones */}
                <Card>
                    <Text style={styles.textPromociones}>Promociones</Text>
                    <ScrollView
                            horizontal
                        >
                    <View style={styles.cardPromociones}>
                        
                        {
                            products.map((product, index) => {
                                if (product.promocion ===true) {
                                    return (
                                        <TouchableOpacity onPress={() => handleSelected(product)} key={index}>
                                            <View style={styles.imagePromocionesContainer} >
                                                <Image source={{uri: product.image}}
                                                        style={styles.imagePromociones}
                                                        />
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            })
                        }
                       
                    </View>
                    </ScrollView>
                </Card>
                {/* Card Productos destacados */}
                <Card>
                    <Text style={styles.textPromociones}>Productos destacados</Text>
                    <View style={styles.cardProductosDestacados}>
                    {
                        products.map((product, index) => {
                            if (product.destacado === true) {
                                return (
                                    <TouchableWithoutFeedback onPress={() => handleSelected(product)} key={index}>
                                        <View style={styles.imageProductosDestacadosContainer}>
                                            
                                            <Image source={{uri: product.image}}
                                            style={styles.imageProductosDestacados}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            }
                        })
                    }
                    
                    </View>
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate('AllProducts')
                    }}>
                        <Text style= {styles.textVerProductos}>Todos los productos</Text>
                    </TouchableWithoutFeedback>
                </Card>
                {/* Card Redes Sociales */}
                <Card>
                    <Text style={styles.textPromociones}>Redes Sociales</Text>
                    <View style={styles.redesSocialesContainer}>
                        <TouchableOpacity onPress={() => {Linking.openURL("https:/instagram.com")}}>
                        <View>
                            <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'}} style={styles.iconosRedesSociales}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {Linking.openURL("https:/facebook.com")}}>
                        <View>
                            <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png'}} style={styles.iconosRedesSociales}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {Linking.openURL("https:/twitter.com")}}>
                        <View>
                            <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png'}} style={styles.iconosRedesSociales}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {Linking.openURL("https://api.whatsapp.com")}}>
                        <View>
                            <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Whatsapp_svg2-512.png'}} style={styles.iconosRedesSociales}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
            </ScrollView>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    },
    card: {
        marginTop: 10,
    },
    containerSuperiorCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    iconoClose:{
        height: 20,
        width: 20
    },
    textName: {
        fontFamily: 'roboto-medium',
        fontSize: 20
    },
    textSubtitulo: {
        fontFamily: 'roboto-regular',
        fontSize: 14
    },
    textDescripcionTienda: {
        fontFamily: 'roboto-light',
        fontSize: 14
    },
    textContainer: {
        width: 200
    },
    descripcionTienda: {
        marginVertical: 20,
    },
    containerInferiorCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    iconosInferioresCard: {
        width: 20,
        height: 20
    },
    cardPromociones:{
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
    textPromociones:{
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomWidth: 0.2,
        borderColor: 'grey',
        color: 'black',
        fontFamily: 'roboto-medium',
        fontSize: 16

    },
    imagePromocionesContainer: {
        width: 150,
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
    imagePromociones: {
        width: '100%',
        height: 100,
        borderRadius: 15
       
    },
    cardProductosDestacados: {
        flexDirection: 'row',
        flexWrap: 'wrap'
        
    },
    imageProductosDestacadosContainer:{
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

    imageProductosDestacados: {
        width: '100%',
        height: 100,
        borderRadius: 15 
    },
    textVerProductos: {
        textAlign: 'center',
        paddingTop: 10,
        textDecorationLine: 'underline',
        fontFamily: 'roboto-medium',
        fontSize: 16
    },
    redesSocialesContainer: {
       
        flexDirection: 'row', 
        justifyContent: 'space-around'  

    },
    iconosRedesSociales:{
        width: 55,
        height: 55
    },
    
});

export default TiendaDetailContainer;