import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import TabNavigator from './tab';
import AuthNavigator from './auth';


export default () => {
    const loggedIn = useSelector(state => state.auth.token);

    return (
        <NavigationContainer>
            {loggedIn 
                ? <TabNavigator/>
                : <AuthNavigator/>
            }
        </NavigationContainer>
    )
}