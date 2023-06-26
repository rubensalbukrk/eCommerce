import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { GlobalStyles } from '../GlobalStyle';
import {  InputArea } from '../InputField';
import { Feather, Entypo, AntDesign } from 'react-native-vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

 return (

   <View style={styles.container}>
    <Text style={[ GlobalStyles.FontLight, styles.labelHeader]}>VANY ÓTICAS</Text>

        <View style={styles.search}>
            <InputArea>
                <TextInput
                placeholder='Pesquisar'
                style={styles.input}
                />
                <TouchableOpacity onPress={() => Alert.alert('aviso', 'você clicou')}>
                <Feather name="search" size={32} color={'#000'} />
                </TouchableOpacity>
            
            </InputArea>
                <TouchableOpacity style={styles.car}onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="shoppingcart" size={54} color="white" /> 
                </TouchableOpacity>
        </View>
   
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
    
        flexDirection: 'column',
        backgroundColor: '#000',
        width: '100%',
        height: 150
    },
    labelHeader: {
        color: '#fff',
        width: '80%',
        height: '45%',
        marginTop: '2%',
        marginLeft: '2%',
        fontSize: 42,
        fontWeight: '900'
    },
    input: {
        fontFamily: 'Electrolize',
        fontSize: 28,
        paddingLeft: '3%'
    },
    search: {
        gap: 3,
        flexDirection: 'row',
        alignItems: 'center',
    
        height: 70
        
    },

})