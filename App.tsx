import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import mkbg from './assets/mkbg.jpg';

export default function App() {
  let random = () => {
    let max: number =  Math.floor(45);
    let min: number =  Math.ceil(1);
    let output:number = Math.floor(Math.random() * (max - min + 1)) + min;
    let ntos:string = String(output);
    return ntos.length !== 1 ? ntos : '0' + ntos;
  }
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 45}}>간단 로또 번호 생성기!</Text>
      <Image source={mkbg} style={{ width: 400, height: 400 }} /> 
      <Text style={{color: '#888', fontSize: 32}}>{random()}/{random()}/{random()}/{random()}/{random()} + {random()}</Text>
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
