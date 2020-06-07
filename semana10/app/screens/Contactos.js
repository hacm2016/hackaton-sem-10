import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Platform, DeviceEventEmitter} from "react-native"

export default function Contactos() {
  return <View style={styles.container}>

            <Text style={styles.title}>Contacto</Text>
            <Image 
            style={styles.image}
            source={require('../assets/friends.png')}/>
            <Text style={styles.title}>Dirección: Av. Javier Prado</Text>
            <Text style={styles.title}>Teléfono: 01-34243-232</Text>
  </View>;
}
const styles = StyleSheet.create({
  box: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: '#DADADA',
      backgroundColor: '#F9F9F9',
      paddingBottom: 0
  },
  title: {
      color: '#212121',
      fontSize: 12,
      textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 350,
    width:350,
    justifyContent: "space-around",    
    resizeMode: "contain",            
  }
})
const { width: viewPortWidth } = Dimensions.get('window');
