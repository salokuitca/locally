import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { useDispatch } from 'react-redux';
import { likeTienda } from '../store/actions/tiendas.action';




const TiendaMiniatura = ({item, onSelected}) => {
    const dispatch = useDispatch();
    const [likeState, setLikeState] = useState(false)
    const handleLike = (item) => {
        dispatch(likeTienda(item.id));
        setLikeState(!likeState)
        
        
    }

    

    
    
    return (
        <>
        <TouchableOpacity onPress={() => onSelected(item)}>
           
            <View style={styles.card}>
                <View>
                    <Image source={{uri: 'https://dummyimage.com/50x50/000/fff'}}
                        style={styles.image}
                    />
                </View>
                <View>
                    <View style={styles.textContainer}>
                            <Text style={styles.textName}  >{item.name}</Text>
                    </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textDescription}>{item.description}</Text>
                        </View>
                </View>
                <View style={styles.likeDistanceContainer}>
                    <TouchableOpacity onPress={()=> handleLike(item)}>
                        { 
                        item.favourite
                            ? <Ionicons name="heart" size={30} color="red" />
                            : <Ionicons name="heart-outline" size={30} color="black" />
                        }
                        
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.textDistance}>{item.distance}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        backgroundColor: Colors.backgroundGeneral,
    },
    container: {
        height:'100%'
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: 200
    },
    textName: {
        fontFamily: 'roboto-medium',
        fontSize: 20
    },
    textDescription:{
        fontFamily: 'roboto-regular',
        fontSize: 14,
    },
    textDistance: {
        fontFamily: 'roboto-light',
        fontSize: 15

    },
    likeDistanceContainer: {
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    imageLike: {
        width: 20,
        height: 20
    }
});

export default TiendaMiniatura;