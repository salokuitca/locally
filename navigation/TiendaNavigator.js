import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListContainer from '../screens/ItemListContainer';
import TiendaDetailContainer from '../screens/TiendaDetailContainer';
import ItemDetailContainer from '../screens/ItemDetailContainer';
import AllProducts from '../components/AllProducts';

const Stack = createStackNavigator();

const TiendaNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ItemList">
            <Stack.Screen name="ItemList" component={ItemListContainer}
            />        
            <Stack.Screen name="TiendaDetail" 
                component={TiendaDetailContainer}
                options = {({route}) => ({title: route.params.name})}
            />        
            <Stack.Screen name="ItemDetail" 
                component={ItemDetailContainer}
                options = {({route}) => ({title: route.params.name})}
            />
            <Stack.Screen name="AllProducts" component={AllProducts}/>
                    
        </Stack.Navigator>
    </NavigationContainer>
);

export default TiendaNavigator;