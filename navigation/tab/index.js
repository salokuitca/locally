import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/colors';

import PerfilNavigator from '../perfil';
import TiendaNavigator from '../tienda';
import MapNavigator from '../map';

const TabStack = createBottomTabNavigator();

const TabNvigator = () => {
    return (
        <TabStack.Navigator 
            initialRouteName="Map"
            tabBarOptions={{
                showLabel: false,
                style: 
                    styles.tabBar,   
            }}
        >
            <TabStack.Screen
                name="Map"
                component={MapNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.icon}>
                            <Ionicons name="map"  color={focused ? Colors.iconsfocused :Colors.icons } size={24}/>
                            <Text style={ focused ? styles.textFocused : styles.text}>Mapa</Text>
                        </View>
                    )
                }}
            />
            <TabStack.Screen
                name="Tienda"
                component={TiendaNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.icon}>
                            <Ionicons name="compass"  color={focused ? Colors.iconsfocused :Colors.icons } size={24}/>
                            <Text style={ focused ? styles.textFocused : styles.text}>Explorar</Text>
                        </View>
                    )
                }}
            />
            <TabStack.Screen
                name="Perfil"
                component={PerfilNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.icon}>
                            <Ionicons name="person"  color={focused ? Colors.iconsfocused :Colors.icons } size={24}/>
                            <Text style={ focused ? styles.textFocused : styles.text}>Mi Perfil</Text>
                        </View>
                    )
                }}
            />
        </TabStack.Navigator>
    )
}

const styles=StyleSheet.create({
    tabBar: {
        height: 56,
        backgroundColor: Colors.tabBar,
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.icons,
    },
    textFocused: {
        color: Colors.iconsfocused,
    }
});

export default TabNvigator;