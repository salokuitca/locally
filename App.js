import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import TiendaNavigator from './navigation/TiendaNavigator';



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
      <TiendaNavigator/>
  );
}

const styles = StyleSheet.create({
  
});
