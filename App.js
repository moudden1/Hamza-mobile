import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import { Provider } from 'react-redux';
import SalesTabNavigator from './Navigation/Navigation';
//import Store from './Store/configureStore'
const App = () => {
  return (
    //<Provider store={Store}>
          <NavigationContainer>
          <SalesTabNavigator />
          </NavigationContainer>
    //</Provider>
  );
}
export default App