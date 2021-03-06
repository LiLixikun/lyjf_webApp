import React, { Component } from 'react';
import FlatList from '../../../components/fastList'
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { color } from '../../../utils'
import api from '../../../api';

export default class App extends Component {

    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('hotleDetail', {
                    id: item.id, title: "酒店详情"
                })}>
                <View style={styles.hotelcard}>
                    <Image style={styles.img} source={{ uri: item.imageList[0].url || "" }} />
                    <View style={styles.cardContent}>
                        <Text style={styles.hotelName}>{item.hotelName}</Text>
                        <Text style={{ color: color.red, fontSize: 18 }}>{item.price}玩呗</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: color.base, fontSize: 14 }}>{item.rmbprice}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: color.theme }}>{item.collectCount}</Text>
                                <Text>收藏</Text>
                            </View>
                        </View>
                        <Text style={styles.address}>{item.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                url={api.hotel.findHotelList}
                renderItem={(item) => this.renderItem(item)}
            />
        )
    }
}

const styles = StyleSheet.create({
    hotelcard: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        height: 140,
        padding: 20,
    },
    img: {
        width: 130,
        height: 100,
        marginRight: 15,
        borderRadius: 4,
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
    },
    hotelName: {
        color: color.black,
        fontSize: 16,
    },
    address: {
        fontSize: 12,
        color: color.color6B2
    }
});