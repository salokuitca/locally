import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapContainer from '../../screens/MapContainer';
import Colors from '../../constants/colors';

const MapStack = createStackNavigator();

const MapNavigator = () => {
    return (
        <MapStack.Navigator 
            initialRouteName="Map"
            screenOptions = {{
                headerStyle: {
                    backgroundColor: Colors.tabBar,
                },
                headerTitleAlign: 'center',
                headerTintColor : Colors.iconsfocused,
            }}
        >
            <MapStack.Screen 
                name="Map"
                component={MapContainer}
                options={{title: "Map"}}
            />
        </MapStack.Navigator>
    )
}

export default MapNavigator;