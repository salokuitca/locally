import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Card from './Card';

const TiendaDetail = ({irListaTiendas}) => {

    // Función para volver a la lista de tiendas cuano se presiona la X
const handleIrListaTiendas = (valor) => {
    irListaTiendas(valor);
}
    return (
        <>
        {/* Para generar el scroll */}
        <ScrollView>
        {/* Contenedor del componente */}
        <View style={styles.card}>
            {/* Card superior donde se presenta la tienda a la que entró el usuario
            y la X como opción para volver a la pantalla anterior */}
            <Card >
                <View style={styles.containerSuperiorCard}>
                    <View>
                        <Image source={{uri: 'https://dummyimage.com/50x50/000/fff'}}
                        style={styles.image}
                        />
                    </View>
                    <View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Deco Garden</Text>
                        </View>
                        <View>
                            <Text style={styles.textSubtitulo}>Plantitas ideales para regalar</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={()=> handleIrListaTiendas(0)}>
                    <View>
                        <View>
                            <Text >X</Text>
                        </View>
                        <View>
                            <Text></Text>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.descripcionTienda}>
                    <Text style={styles.textDescripcionTienda}>Suculentas🌱, cactus🌵 y todas las plantitas❤ que quieras para decorar tus ambientes!🌺🌻🌷🌼</Text>
                </View>
                <View style={styles.containerInferiorCard}>
                    <View>
                        <Image source={require('../assets/images/iconoMensaje.png')} style={styles.iconosInferioresCard}/>
                    </View>
                    <View>
                        <Image source={require('../assets/images/iconoCart.png')} style={styles.iconosInferioresCard}/>
                    </View>
                    <View>
                    <Image source={require('../assets/images/like.png')} style={styles.iconosInferioresCard}/>
                    </View>
                </View>
            </Card>
            {/* Card promociones */}
            <Card>
                <Text style={styles.textPromociones}>Promociones</Text>
                <View style={styles.cardPromociones}>
                    <View style={styles.imagePromocionesContainer}>
                        <Image source={{uri: 'https://dummyimage.com/200x100/000/fff'}}
                                style={styles.imagePromociones}
                                />
                    </View>
                    <View style={styles.imagePromocionesContainer}>
                        <Image source={{uri: 'https://dummyimage.com/200x100/000/fff'}}
                                style={styles.imagePromociones}
                                />
                    </View>
                </View>
            </Card>
            {/* Card Productos destacados */}
            <Card>
                <Text style={styles.textPromociones}>Productos destacados</Text>
                <View style={styles.cardProductosDestacados}>
                    <View style={styles.imageProductosDestacadosContainer}>
                        <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                        style={styles.imageProductosDestacados}
                        />
                    </View>
                    <View style={styles.imageProductosDestacadosContainer}>
                        <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                        style={styles.imageProductosDestacados}
                        />
                    </View>
                    <View style={styles.imageProductosDestacadosContainer}>
                        <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                        style={styles.imageProductosDestacados}
                        />
                    </View>
                    <View style={styles.imageProductosDestacadosContainer}>
                        <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                        style={styles.imageProductosDestacados}
                        />
                    </View>
                    <View style={styles.imageProductosDestacadosContainer}>
                        <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                        style={styles.imageProductosDestacados}
                        />
                    </View>
                    <View style={styles.imageProductosDestacadosContainer}>
                        <Image source={{uri: 'https://dummyimage.com/100x100/000/fff'}}
                        style={styles.imageProductosDestacados}
                        />
                    </View>
                </View>
                <Text style= {styles.textVerProductos}>Todos los productos</Text>
            </Card>
            {/* Card Redes Sociales */}
            <Card>
                <Text style={styles.textPromociones}>Redes Sociales</Text>
                <View style={styles.redesSocialesContainer}>
                    <View>
                        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'}} style={styles.iconosRedesSociales}/>
                    </View>
                    <View>
                        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png'}} style={styles.iconosRedesSociales}/>
                    </View>
                    <View>
                        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png'}} style={styles.iconosRedesSociales}/>
                    </View>
                    <View>
                        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Whatsapp_svg2-512.png'}} style={styles.iconosRedesSociales}/>
                    </View>
                </View>
            </Card>
        </View>
        </ScrollView>
        </>
    )
}

const styles= StyleSheet.create({
    card: {
        marginTop: 100,
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
        width: '50%',
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

export default TiendaDetail;