import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from './pages/Home';
import Colletions from './pages/Colletions';
import Favorites from './pages/Favorites';
import User from './pages/User';
import Cart from './pages/Cart';
import { Feather } from 'react-native-vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainApp() {


 return (
 
    
    <Tab.Navigator
        initialRouteName='Home' 

        screenOptions={{
            headerShown: false,
    
            tabBarShowLabel: false,
            tabBarIconStyle: true,
            tabBarActiveTintColor: '#FFF',

            tabBarStyle: styles.tabBar
        }}
    
    >
        
           
        <Tab.Group>
                <Tab.Screen
                options={{
                    
                        title: 'Inicio',
                        tabBarIcon: ({color, focused}) => (
                            <Feather name="home" size={focused ? 42 : 28} color={color} />
                        )
                }}
                name="Home" 
                component={Home} />

                <Tab.Screen
                options={{
                        title: 'Coleções',
                        tabBarBadge: 2,
                        tabBarIcon: ({color, focused}) => (
                            <Feather name="menu" size={focused ? 42 : 22} color={color} />
                        )
                }}
                 
                name="Colletions" 
                component={Colletions} />

                <Tab.Screen
                options={{
                        title: 'Favoritos',
                        tabBarIcon: ({color, focused}) => (
                            <Feather name="heart" size={focused ? 42 : 22} color={color} />
                        ) 
                }}
                name="Favorites" 
                component={Favorites} />

                <Tab.Screen
                options={{
                        title: 'Eu',
                        
                        tabBarIcon: ({color, focused}) => (
                            <Feather name="user" size={focused ? 42 : 28} color={color} />
                        )
                }} 
                name="User" 
                component={User} />
        </Tab.Group>
        <Tab.Group screenOptions={{
                presentation: 'modal',

                tabBarButton: () => null
            }} >
                <Stack.Screen name="Cart" component={Cart} />
            </Tab.Group>

   </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar:{
    
        flex: -2,
        alignSelf: 'center',
        width: '90%',
        height: '15%',
        backgroundColor: '#000',
        borderRadius: 30,
        bottom: '2%',
        paddingHorizontal: '2%'
    }
})