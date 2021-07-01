import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import Card from './Card';

import Data from '../constants/data';

const ItemList = () => {

    return (
        <>
        
        <View style={styles.container}>
            
            <FlatList
            data= {Data}
            renderItem = {
                data => {
                    return (
                        <>
                        <Card >
                <View style={styles.card}>
                    <View>
                        <Image source={{uri: 'https://dummyimage.com/50x50/000/fff'}}
                        style={styles.image}
                        />
                    </View>
                    <View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{data.item.name}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text>{data.item.description}</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                        <Image source={require('../assets/like.png')} style={styles.imageLike}/>
                        </View>
                        <View>
                        <Text>{data.item.distance}</Text>
                        </View>
                    </View>
                </View>
            </Card>
                        </>
                    )
                }
            }
            keyExtractor={item => item.id}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 150,
       
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: 200
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

export default ItemList;