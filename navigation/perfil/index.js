import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PerfilContainer from '../../screens/PerfilContainer';
import Colors from '../../constants/colors';
import FotoPerfil from '../../screens/FotoPerfil';



const PerfilStack = createStackNavigator();

const PerfilNavigator = () => {
    return (
        <PerfilStack.Navigator 
            initialRouteName="Perfil"
            screenOptions = {{
                headerStyle: {
                    backgroundColor: Colors.tabBar,
                },
                headerTitleAlign: 'center',
                headerTintColor : Colors.iconsfocused,
            }}
           
        >
            <PerfilStack.Screen 
                name="Perfil"
                component={PerfilContainer}
                options={{title: "Perfil"}}
            />

            <PerfilStack.Screen 
                name="Foto de Perfil"
                component = {FotoPerfil}
                options={{title: 'Foto de Perfil'}}
            />

            
        </PerfilStack.Navigator>
    )
}



export default PerfilNavigator;