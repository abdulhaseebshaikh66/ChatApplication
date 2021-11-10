import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens
import ChatScreen from '../Screens/ChatScreen';
import SettingScreen from '../Screens/SettingScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home2'
      screenOptions={{animationEnabled: false, headerShown: false}}
    >
      <Stack.Screen name="Home2" component={BottomTab} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        animationEnabled: false, 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
          height:'8%',
          backgroundColor: 'rgb(255,255,255)',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          elevation: 10,
          borderWidth: 2,
          borderColor: '#fff',
        }
      }}
    >
      <Tab.Screen 
        
        name="Home" 
        component={ChatScreen} 
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default MyStack;