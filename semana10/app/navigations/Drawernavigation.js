import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import HomeStack from "./HomeStack";
import Navigation from "./Navigation"
import NavigationContactos from "./NavigationContactos";
const Drawer = createDrawerNavigator();

export default function Drawernavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Home" component={Navigation} />
        <Drawer.Screen name="Contactos" component={NavigationContactos} />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
}

