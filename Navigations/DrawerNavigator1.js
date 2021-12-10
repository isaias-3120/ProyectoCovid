import React from 'react';
import {Text, View} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import TrackingScreen from '../Navigations/BottomTabNavigator1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoritosScreen from '../Screens/FavorittosScreen';
import Top3Screen from '../Screens/TOP3Screen';
import ContactanosScreen from '../Screens/ContactanosScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#ffff',
                width:'80%'
            }}
            drawerContentOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606"
            }}
            drawerContent={(props)=>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                </DrawerContentScrollView>
            }
        
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerLabel: "Inicio",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    )
                }}

            />

            <Drawer.Screen
                name="Tracking"
                component={TrackingScreen}
                options={{
                    drawerLabel: "Tracking",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"ios-settings"} size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="FavoritosScreen"
                component={FavoritosScreen}
                options={{
                    drawerLabel: "Mis favoritos",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"heart"} size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="Top3Screen"
                component={Top3Screen}
                options={{
                    drawerLabel: "Top 3 Paises Casos ",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"search"} size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="Contactanos"
                component={ContactanosScreen}
                options={{
                    drawerLabel: "Contactanos",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"mail"} size={20} color={color} />
                    )
                }}
            />

        </Drawer.Navigator>
    )
}