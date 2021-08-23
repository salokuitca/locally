import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../../constants/colors';

import CartContainer from '../../screens/CartContainer';



const CartStack = createStackNavigator();

const CartNavigator = () => {
    return (
        <CartStack.Navigator 
            initialRouteName="Perfil"
            screenOptions = {{
                headerStyle: {
                    backgroundColor: Colors.tabBar,
                },
                headerTitleAlign: 'center',
                headerTintColor : Colors.iconsfocused,
            }}
           
        >
            <CartStack.Screen 
                name="Cart"
                component={CartContainer}
                options={{title: "Cart"}}
            />

            

            
        </CartStack.Navigator>
    )
}



export default CartNavigator;