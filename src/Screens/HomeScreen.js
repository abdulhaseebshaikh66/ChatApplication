import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// import Secreens 
import ChatComponent from '../Components/ChatSection';
import Header from '../Components/Header';;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
      <ScrollView style={styles.messageView}>
        <ChatComponent/>      
        <ChatComponent/>      
        <ChatComponent/>
        <ChatComponent/>      
        <ChatComponent/>      
        <ChatComponent/>   
        <ChatComponent/>      
        <ChatComponent/>      
        <ChatComponent/>         
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageView:{
    marginTop:5,
  }
});
