import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListContainer from '../../screens/ItemListContainer';
import TiendaDetailContainer from '../../screens/TiendaDetailContainer';
import ItemDetailContainer from '../../screens/ItemDetailContainer';
import AllProducts from '../../components/AllProducts';
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
            <TiendaStack.Screen 
                name="AllProducts" 
                component={AllProducts}
                options = {{title: "Todos los productos"}}
            />
                  
        </TiendaStack.Navigator>
   
);

export default TiendaNavigator;