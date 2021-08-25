import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/user/AuthScreen';
import Registrarse from '../../components/Registrarse';

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
            <AuthStack.Screen name="SignUp" component={Registrarse}
                options={{title: 'Registrate'}}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;