import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Platform, DeviceEventEmitter} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from "./HomeStack";
import ContactosStack from "./ContactosStack";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    
      <Tab.Navigator
      initialRouteName="contactos"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
     
      >
           <Tab.Screen
          name="home"
          component={HomeStack}
        //  options={{ title: "Principal" },{Icon:""}}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#1f65ff',
            showIcon: true ,
            
            tabBarIcon: ({ tintColor }) => (
              
              <Image
              style={styles.image}
                source={require('../assets/025-warehouse.png') }
               
              />
            )
          }}
        />
         <Tab.Screen
          name="contactos"
          component={ContactosStack}
          options={{
            tabBarLabel: 'Contactos',
            tabBarColor: '#1f65ff',
            showIcon: true ,
            
            tabBarIcon: ({ tintColor }) => (
              
              <Image
              style={styles.image}
                source={require('../assets/contacto.jpg') }
               
              />
            )
          }}
        />
       
        
       
      </Tab.Navigator>
      
    
  );
}
const styles = StyleSheet.create({
  
  image: {
    height: 40,
    width:40,
    justifyContent: "space-around",    
    resizeMode: "contain",            
  }
})
const { width: viewPortWidth } = Dimensions.get('window');
