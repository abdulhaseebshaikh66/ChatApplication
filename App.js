import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/routes/mainNavigation';
import * as Algorithm from './src/Algorithm_Encyption_Decryption';
import {View, Text} from 'react-native';
export default function App() {
  const key = Algorithm.generate_type();
  const key2 = Algorithm.encrypt('Hsssssssss""', key);
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
