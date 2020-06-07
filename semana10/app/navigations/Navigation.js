import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Platform, DeviceEventEmitter} from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeStack from "./HomeStack";
import ContactosStack from "./ContactosStack";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    
      <Tab.Navigator
      initialRouteName="home"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
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
