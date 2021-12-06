import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import screens
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import SettingScreen from '../Screens/SettingScreen';
import LoginScreen from '../AuthScreens/LoginScreen';
import SignupScreen from '../AuthScreens/SignUp';

// import
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/EvilIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={true !== true ? 'Home' : 'Login'}
      screenOptions={{animationEnabled: false, headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="HomeTab" component={BottomTab} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '8%',
          backgroundColor: 'rgb(249, 250, 247)',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          elevation: 10,
          borderWidth: 2,
          borderColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="User"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon2
              name={'user'}
              size={37}
              color={focused ? 'rgb(22,215,105)' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        screenOptions={{
          tabBarStyle: {background: 'red'},
        }}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon1
              name={'chatbox-ellipses-outline'}
              size={30}
              color={focused ? 'rgb(22,215,105)' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon1
              name={'settings-outline'}
              size={30}
              color={focused ? 'rgb(22,215,105)' : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    // width: '20@ms',
    // height: '20@ms',
  },
});

export default MyStack;
