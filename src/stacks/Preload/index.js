import React from 'react';
import { View, ActivityIndicator } from 'react-native';



export default function Preload() {

 return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000'}}>
      <ActivityIndicator color={'#fff'} />
     </View>
  )
}