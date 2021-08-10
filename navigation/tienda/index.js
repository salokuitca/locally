import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListContainer from '../../screens/ItemListContainer';
import TiendaDetailContainer from '../../screens/TiendaDetailContainer';
import ItemDetailContainer from '../../screens/ItemDetailContainer';
import AllProducts from '../../components/AllProducts';
import CartContainer from '../../screens/CartContainer';
import Colors from '../../constants/colors';

const TiendaStack = createStackNavigator();

const TiendaNavigator = () => (
    
        <TiendaStack.Navigator 
            initialRouteName="ItemList"
            screenOptions = {{
                headerStyle: {
                    backgroundColor: Colors.tabBar,
                },
                headerTitleAlign: 'center',
                headerTintColor : Colors.iconsfocused,
            }}
            
        >
            <TiendaStack.Screen 
                name="Tiendas cerca de ti" 
                component={ItemListContainer}
            />        
            <TiendaStack.Screen 
                name="TiendaDetail" 
                component={TiendaDetailContainer}
                options = {({route}) => ({title: route.params.name})}
            />        
            <TiendaStack.Screen name="ItemDetail" 
                component={ItemDetailContainer}
                options = {({route}) => ({title: route.params.name})}
            />
            <TiendaStack.Screen name="AllProducts" component={AllProducts}/>
            <TiendaStack.Screen
                name= 'Cart'
                component = {CartContainer}
                options={{title: 'CARRITO DE COMPRAS'}}
            />        
        </TiendaStack.Navigator>
   
);

export default TiendaNavigator;