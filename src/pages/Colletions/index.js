import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Oculos from '../../../components/oculos';

export default function Colletions() {
 return (
  <>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.container}>
    

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Oculos cost="R$ 89,90" decrement="R$ 120" img={require('../../../assets/oculos/QUADRADO.jpeg')} style={styles.titulo} >
          QUADRADO
        </Oculos>

        <Oculos cost="R$ 60" decrement="R$ 90" img={require('../../../assets/oculos/AVIADOR.jpeg')} style={styles.titulo}>
          AVIADOR
        </Oculos>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Oculos cost="R$ 89,90" decrement="R$ 130" img={require('../../../assets/oculos/OFERTA1.jpeg')} style={styles.titulo} >
          RETRO NEW
        </Oculos>

        <Oculos cost="R$ 60" decrement="R$ 100" img={require('../../../assets/oculos/OFERTA2.jpeg')} style={styles.titulo}>
          RAYBAN
        </Oculos>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Oculos cost="R$ 79" decrement="R$ 90" img={require('../../../assets/oculos/OFERTA3.jpeg')} style={styles.titulo} >
          REDONDO
        </Oculos>

        <Oculos cost="R$ 59" decrement="R$ 80" img={require('../../../assets/oculos/OFERTA4.jpeg')} style={styles.titulo}>
          RETRO
        </Oculos>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Oculos cost="R$ 70" decrement="R$ 100" img={require('../../../assets/oculos/rayban.jpeg')} style={styles.titulo} >
          RAYBAN 2
        </Oculos>

        <Oculos cost="R$ 69" decrement="R$ 100" img={require('../../../assets/oculos/retro.jpeg')} style={styles.titulo}>
          RETRO
        </Oculos>
      </View>   


    </View>
    
    </ScrollView>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    justifyContent: 'center'
  }
})