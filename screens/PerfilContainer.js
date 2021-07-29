import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Colors from '../constants/colors';

const PerfilContainer = () => {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.superior}>
                <Card style={styles.cardFavoritos}>
                    <View>
                    <Ionicons name="ios-heart" size={50} color={Colors.buttonPrimary} />
                    </View>
                    <Text style={styles.text}>Favoritos</Text>
                </Card>
                <Card style={styles.cardFavoritos}>
                    <View>
                        <Ionicons name="settings-sharp" size={50} color={Colors.tabBar} />
                    </View>
                    <Text style={styles.text}>Configuración</Text>
                    
                </Card>
                
            </View>
           
                <Card style={styles.cardPedidos}>
                    <View>
                        <MaterialIcons name="shopping-bag" size={50} color={Colors.tabBar} />
                    </View>
                    <Text style={styles.text}>Mis Pedidos</Text>
                </Card>
            
                <Card style={styles.cardPedidos}>
                    <View>
                        <Ionicons name="chatbox-ellipses" size={50} color={Colors.tabBar} />
                    </View>
                    <Text style={styles.text}>Mis Mensajes</Text>
                </Card>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    superior: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '30%'
    },
    cardFavoritos: {
        width: '42%',
        justifyContent:'center',
        alignItems : 'center'
    },
    cardPedidos: {
        height: '30%',
        justifyContent:'center',
        alignItems : 'center'
    },
    text: {
        fontFamily: 'roboto-medium',
        fontSize:16,
    }

});

export default PerfilContainer;