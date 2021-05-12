import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import mkbg from './assets/mkbg.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={mkbg} style={{ width: 400, height: 400 }} /> 
      <Text style={{color: '#888', fontSize: 32}}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
