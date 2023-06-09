import 'react-native-gesture-handler'
import React, {useContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/MainStack';
import MainApp from './src/MainApp';
import { useFonts } from 'expo-font';
import Preload from './src/stacks/Preload';


export default function App() {
  
  const [fontsLoaded] = useFonts({
    'TsukimiRounded Light': require('./assets/font/Tsuki-Light.ttf'),
    'TsukimiRounded Medium': require('./assets/font/Tsuki-Medium.ttf'),
    'TsukimiRounded Bold': require('./assets/font/Tsuki-Bold.ttf'),
    'Doppio One': require('./assets/font/DoppioOne.ttf'),
    'Electrolize': require('./assets/font/Electrolize-Regular.ttf')

  });
  
  if (!fontsLoaded) {
    return <Preload />;
  }


  const auth = false;

  return (

    <NavigationContainer>

    <MainApp />

    <StatusBar hidden={true} />
    
    </NavigationContainer>
  );
}