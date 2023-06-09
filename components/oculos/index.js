import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Oculos(props) {

return (
    <TouchableOpacity 
    style={styles.container}>
        <View style={styles.shadowimage}>
            <Image 
            source={props.img}
            style={styles.oculosImg}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.titulo}> {props.children} </Text>
            <Text style={styles.decrementprice}> {props.decrement} </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.colors}>preto/branco</Text>
            <Text style={styles.price}> {props.cost} </Text>
        </View>
        
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        
        justifyContent: 'center'
        
    },
    shadowimage: {
    
        borderRadius: 85,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 3
    },
    oculosImg: {
        width: 170,
        height: 110,
        borderRadius: 80,
    },
    titulo: {
        fontSize: 22,
        color: '#000',
        fontWeight: '600'
      },
    decrementprice: {
        fontSize: 20,
        textDecorationLine: 'line-through',
        color: '#676767',

    },
    colors: {
        color: '#898989',
        textAlign: 'left'
    },
    price: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'right'
    }
})