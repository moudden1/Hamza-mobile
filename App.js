import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SalesTabNavigator from './Navigation/Navigation';
import Navigation from './Navigation/Navigation'

const App = () => {
  return (
    <NavigationContainer>
    <SalesTabNavigator />
    </NavigationContainer>
  );
}
export default App