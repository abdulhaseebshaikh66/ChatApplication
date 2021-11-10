// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Icon1 name="search1" size={33} color="rgb(22,215,105)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
