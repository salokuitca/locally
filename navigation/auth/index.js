import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/user/AuthScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center'
            }}
        >
            <AuthStack.Screen name="Login" component={AuthScreen}
                options={{title: 'Iniciar Sesión'}}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;