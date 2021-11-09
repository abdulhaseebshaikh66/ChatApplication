import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/routes/mainNavigation'; 
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}