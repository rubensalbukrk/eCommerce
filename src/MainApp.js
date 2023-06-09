import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from './pages/Home';
import Colletions from './pages/Colletions';
import Favorites from './pages/Favorites';
import User from './pages/User';
import Header from '../components/header';
import { Feather } from 'react-native-vector-icons'



const Tab = createBottomTabNavigator();

export default function MainApp() {


 return (
    <Tab.Navigator
        initialRouteName='Home' 

        screenOptions={{
            header: () => {
                return (
                    <View>
                        <Header />
                    </View>
                )
            },
      
            tabBarShowLabel: false,
            tabBarIconStyle: true,
            tabBarActiveTintColor: '#FFF',
            tabBarItemStyle: {
                    width: 20,
                    height: 60,
                    alignItems: 'center'
                   
            },

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

   </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar:{
    
        flex: -2,
        alignSelf: 'center',
        width: '90%',
        height: '10%',
        backgroundColor: '#000',
        borderRadius: 30,
        bottom: '2%',
        paddingHorizontal: '2%'
    }
})