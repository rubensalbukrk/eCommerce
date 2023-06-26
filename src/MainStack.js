import React, {useContext, useState} from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "./stacks/Welcome";
import Login from './stacks/Login';
import Cadastro from './stacks/Cadastro';
import MainApp from './MainApp'
import Cart from './pages/Cart';

const Stack = createNativeStackNavigator();


export default function MainStack(){
    return (


            <Stack.Navigator 
            screenOptions={{
                headerShown: false,
       
            }}
            initialRouteName='Welcome'
            > 
            <Stack.Group >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="HomeApp" component={MainApp} />
            </Stack.Group>
            <Stack.Group screenOptions={{
                presentation: 'fullScreenModal',
                headerBackTitleVisible: false,
                autoHideHomeIndicator: true
            }} >
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Group>
                
                
            </Stack.Navigator>

    
    );
}