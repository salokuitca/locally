import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFoto } from '../store/actions/foto.action'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/colors';


const FotoPerfil = ({navigation}) => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState('');
    const [pickedUri, setPickedUri] = useState();

    const onHandleImage = path => setSelectedImage(path);
    
    const verifyPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
          Alert.alert(
            'Permisos insuficientes',
            'Necesita dar permisos de uso de la cámara para usar esta app',
            [{ text: 'Ok' }],
          );
          return false;
        }
    
        return true;
      }

      const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return;
    
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1,1],
          quality: 0.8,
        });
    
        setPickedUri(image.uri);
        onHandleImage(image.uri);
      };


      const handlerConfirmar = () => {
        dispatch(addFoto(selectedImage))
        navigation.goBack();
      }

    return (
        <>
        <Text style={styles.text}>Sacate tu foto de perfil</Text>
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                ? <Text>No hay imagen seleccionada...</Text>
                : <Image style={styles.image} source={{ uri: pickedUri }} />
                }
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttons}>
                <Button
                    title="Tomar Foto"
                    color= {Colors.buttonPrimary}
                    onPress={handlerTakeImage}
                />
              </View>
              <View style={styles.buttons}>
                <Button
                    title="Confirmar"
                    color={Colors.buttonPrimary}
                    onPress={handlerConfirmar}
                />
              </View>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 18,
      },
      text: {
        textAlign: 'center',
        fontFamily: 'roboto-medium',
        fontSize: 18,
        padding: 10,

      },
      preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.tabBar,
        borderWidth: 1,
      },
      image: {
        width: '100%',
        height: '100%',
      },
      buttonContainer: {
        width: '100%',
        justifyContent: 'space-between'
      },
      buttons: {
        padding: 10
      }
});

export default FotoPerfil;