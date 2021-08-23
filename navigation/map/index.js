import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapContainer from '../../screens/MapContainer';
import TiendaDetailContainer from '../../screens/TiendaDetailContainer';
import ItemDetailContainer from '../../screens/ItemDetailContainer';
import AllProducts from '../../components/AllProducts';
import CartContainer from '../../screens/CartContainer';
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
            <MapStack.Screen 
                name="TiendaDetail" 
                component={TiendaDetailContainer}
                options = {({route}) => ({title: route.params.name})}
            />        
            <MapStack.Screen name="ItemDetail" 
                component={ItemDetailContainer}
                options = {({route}) => ({title: route.params.name})}
            />
            <MapStack.Screen name="AllProducts" component={AllProducts}/>
                  
        </MapStack.Navigator>
    )
}

export default MapNavigator;