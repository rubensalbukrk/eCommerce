import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../../../components/GlobalStyle';
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
    <ImageBackground style={styles.background} source={require('../../../assets/background.png')}>

      <Text style={[ GlobalStyles.FontLight, styles.title]}>ADQUIRA</Text>
      <Text style={[ GlobalStyles.FontLight, styles.title2]}>AS NOVAS</Text>
      <Text style={[ GlobalStyles.FontLight, styles.title3]}>COLEÇÕES</Text>

      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Login')}
      >
        <Text style={[GlobalStyles.FontMedium, styles.labelButton]}>CONHECER</Text>
        <Image 
        style={{width: 42, height: 32, resizeMode: 'contain', marginTop: 10}}
        source={require('../../../assets/icons/icon-next.png')} />

      </TouchableOpacity>

    </ImageBackground>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 38,
    marginTop: '8%',
    marginLeft: '5%'
  },
  title2: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 42,
    marginTop: '2%',
    marginLeft: '5%'
  },
  title3: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 53,
    marginTop: '2%',
    marginLeft: '5%'
  },
  button: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255, 0.6)',
    shadowOpacity: '0.3',
    paddingLeft: 30,
    paddingRight: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  labelButton: {
    fontSize: 32
  }
});