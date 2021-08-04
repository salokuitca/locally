import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import { Provider } from 'react-redux';
import MainNavigator from './navigation';
import store from './store';
import { init } from './db';

init()
  .then (() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
  })



export default function App() { 
  

  // Traer fuentes
  const [dataLoaded] = useFonts({
    'roboto-light' : require ('./assets/fonts/Roboto-Light.ttf'),
    'roboto-medium' : require ('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular' : require ('./assets/fonts/Roboto-Regular.ttf'),
  })

  // Para traer fuentes
  if (!dataLoaded) {
    return null;
    
  }

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
