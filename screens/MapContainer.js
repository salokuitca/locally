import React,  { useState, useEffect }  from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { selectTienda, likeTienda } from '../store/actions/tiendas.action';
import { 
    Animated,
    Alert,
    StyleSheet, Dimensions} from 'react-native';
  import * as Location from 'expo-location';
    
import TiendaMiniatura from '../components/TiendaMiniatura';
import Card from '../components/Card';


    
    

const MapContainer = ({navigation}) => {
  const dispatch = useDispatch ();
  const tiendas = useSelector (state => state.tiendas.listTiendas);
  const likeSelected = useSelector (state => state.tiendas.likeSelected);
  const handleSelected = (item) => {
    dispatch(selectTienda(item.id)),
    navigation.navigate('TiendaDetail', {
      name:item.name,
    })
  }
  const handleLike = (item) => {
    dispatch(likeTienda(item.id));
  }

  const { width} = Dimensions.get("window");
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
 
  //Declaración del estado del mapa al inicializar la app
  const initialMapState = {
    tiendas,
    region: {
      latitude: -31.973856,
      longitude: -64.552651,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    },
  };

  //Lectura del estado inicial del mapa
  const [mapState, setMapState] = useState (initialMapState);

  //Declaración de variables e inicialización de variables necesarias para la animación
  let mapIndex= 0;
  let mapAnimation = new Animated.Value(0);

  useEffect (() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); 
      if (index >= mapState.tiendas.length) {
        index = mapState.tiendas.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout)
      
      const regionTimeout = setTimeout(() => {
        if( mapIndex !== index ) {
          mapIndex = index;
          const tiendaActual = mapState.tiendas[index]
          const currentLatitude = mapState.tiendas[index].latitude
          const currentLongitude = mapState.tiendas[index].longitude
          _map.current.animateToRegion(
            {
              latitude: currentLatitude,
              longitude: currentLongitude,
              latitudeDelta: mapState.region.latitudeDelta,
              longitudeDelta: mapState.region.longitudeDelta,
            },
            350
          );
        }
      }, 10)
    })
  })

  const interpolations = mapState.tiendas.map((tienda, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;
    let x = (markerID * CARD_WIDTH) + (markerID * 20)
    
    _scrollView.current.scrollTo({x:x, y:0, animated:true})
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null); 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permisos insuficientes',
          'Necesita dar permisos de localización para la app',
          [{ text: 'Ok' }],
        );
      }
    })();
  }, []);
    return (
        <>
        <MapView
          ref= {_map}
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          region={mapState.region}
        >
          {
            mapState.tiendas.map((tienda, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  }
                ]
              }
              return (
                <Marker
                  coordinate={{
                    latitude: tienda.latitude,
                    longitude: tienda.longitude,
                  }}
                  
                  key= {index}
                  onPress={(e) =>onMarkerPress(e)}
              >
                
                <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../assets/map_marker.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
                
                
              </Marker>
              )
            })
          }

          
        </MapView>
        <Animated.ScrollView
          ref = {_scrollView}
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          pagingEnabled
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,
                  }
                },
              },
            ],
            {useNativeDriver: true}
          )}
        >
          {
          
            mapState.tiendas.map((tienda, index) => {
            
            return (
            <Card key={index}>
              <TiendaMiniatura item ={tienda} onSelected={handleSelected} onLike={handleLike} likeSelected={likeSelected}/>
            </Card>
            )
          })
          }
          
        </Animated.ScrollView>
      </>
    )
}

const styles=StyleSheet.create({
    map: {
      height: '100%'
    },
    marker: {
      width: 30,
      height: 30,
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },    
    
});

export default MapContainer;