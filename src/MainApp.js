import React, {useContext, useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from './pages/Home';
import Colletions from './pages/Colletions';
import Favorites from './pages/Favorites';
import User from './pages/User';
import Cart from './pages/Cart';
import { Feather } from 'react-native-vector-icons'
import { FadeInDown } from 'react-native-reanimated';


const Tab = createMaterialBottomTabNavigator();

export default function MainApp() {


 return (
    <Tab.Navigator
    initialRouteName='Home' 
    shifting={true}
    activeColor='red'
    sceneAnimationType='shifting'
    sceneAnimationEnabled={true}
    barStyle={styles.tabBar}>
        
        <Tab.Group>
                <Tab.Screen
                options={{
                    
                        title: 'Inicio',
                        tabBarIcon: ({size, color}) => (
                            <Feather name="home" size={32} color={color} />
                        )
                }}
                name="Home" 
                component={Home} />

                <Tab.Screen
                options={{
                        title: 'Coleções',
                        tabBarBadge: 2,
                        tabBarIcon: ({size, color}) => (
                            <Feather name="menu" size={32} color={color} />
                        )
                }}
                 
                name="Colletions" 
                component={Colletions} />

                <Tab.Screen
                options={{
                        title: 'Favoritos',
                        tabBarIcon: ({size, color}) => (
                            <Feather name="heart" size={32} color={color} />
                        ) 
                }}
                name="Favorites" 
                component={Favorites} />

                <Tab.Screen
                options={{
                        title: 'Eu',
                        tabBarIcon: ({size, color}) => (
                            <Feather name="user" size={32} color={color} />
                        )
                }} 
                name="User" 
                component={User} />
        </Tab.Group>

   </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar:{
        position: 'absolute',
        marginHorizontal: '5%',
        marginBottom: '5%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 50,
        backgroundColor: '#0f0f0f'
    }
})