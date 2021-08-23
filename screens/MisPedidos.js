import React, {useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PedidosItem from '../components/PedidosItem';
import { deleteOrder, getOrders } from '../store/actions/orders.action';


const MisPedidos = () => {
    const dispatch = useDispatch();
    const user = useSelector (state => state.auth.user);
    const orders = useSelector (state => state.orders.items);

    useEffect(() => {
        dispatch(getOrders(user));
      }, []);

    const onDeleteHandler = (id) => dispatch(deleteOrder(id))

    const renderItem = (data) => (
        <PedidosItem item={data.item} onDelete={onDeleteHandler} />
    )
    
    return (
        <>
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
});

export default MisPedidos;