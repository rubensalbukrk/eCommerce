import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AreaView ,InputArea, LabelInput } from '../../../components/InputField';
import { GlobalStyles } from '../../../components/GlobalStyle';
import { Feather, Entypo, AntDesign } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

 return (

   <View style={styles.container}>
    <Text style={[GlobalStyles.FontSystem, styles.title]}>VANY ÓTICAS</Text>

    <Text style={[GlobalStyles.FontSystem, styles.title2]}>CADASTRAR-ME</Text>

      <AreaView style={styles.viewLogin}>

        <InputArea>
        <Feather name="user" size={32} color="#000" />
        <TextInput
        style={[GlobalStyles.FontSystem , styles.input]}
        placeholder='Nome'
        />
        </InputArea>

        <InputArea>
        <Feather name="mail" size={32} color="#000" />
        <TextInput
        style={[GlobalStyles.FontSystem , styles.input]}
        placeholder='Seu e-mail'
        />
        </InputArea>

        <InputArea>
        <Feather name="phone" size={32} color="#000" />
        <TextInput
        style={[GlobalStyles.FontSystem , styles.input]}
        placeholder='(xx) - xxxx xxxx'
        />
        </InputArea>

        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('')}
        >
          <Text style={[GlobalStyles.FontSystem, styles.buttonlabel]}>CADASTRAR</Text>
        </TouchableOpacity>
      </AreaView>

      <View style={styles.cadastrar}
      onClick={() => navigation.navigate('Login')}
      >
      <Text style={[GlobalStyles.FontSystem, styles.label]}>JÁ É CLIENTE?</Text>
      <Text style={[GlobalStyles.FontSystem, styles.label2]}>FAZER LOGIN</Text>
      </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#000'
  },
  viewLogin: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 48,
    color: '#fff',
    width: 248,
    height: 60,
    marginTop: '1rem',
    marginLeft: '2rem',
    marginBottom: '6rem'
  },
  title2: {
    width: '80%',
    fontSize: 32,
    alignSelf: 'center',
    color: '#fff',
    textAlign: 'left'
    
  },
  input: {
    fontSize: 22
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 50,
    backgroundColor: '#fff',
    opacity: 0.7,
    borderRadius: 15,
    marginTop: '1rem',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 10,
    elevation: 4
  },
  buttonlabel: {
    fontSize: 26,
    fontWeight: '500'
  },
  label: {
    fontSize: 22,
    color: '#fff'
  },
  label2: {
    fontSize: 22,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  cadastrar: {
    position: 'absolute',
    marginLeft: '2rem',
    bottom: '10%',
    cursor: 'pointer'
  }
})