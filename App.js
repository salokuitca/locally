import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import ItemListContainer from './screens/ItemListContainer';
import TiendaDetailContainer from './screens/TiendaDetailContainer';


export default function App() { 
  const [pantallaRenderizada, setPantallaRenderizada] = useState ('');

  // Traer fuentes
  const [dataLoaded] = useFonts({
    'roboto-light' : require ('./assets/fonts/Roboto-Light.ttf'),
    'roboto-medium' : require ('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular' : require ('./assets/fonts/Roboto-Regular.ttf'),
  })

  // Renderizado opcional con operador ternario
  const render = pantallaRenderizada
  ?<TiendaDetailContainer irListaTiendas={setPantallaRenderizada}></TiendaDetailContainer>
  :<ItemListContainer irTienda={setPantallaRenderizada}/>

  // Para traer fuentes
  if (!dataLoaded) {
    return null;
    
  }

  return (
    <View style={styles.container}>

      {/* Renderiza según resultado del operador ternario */}
      {render}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
