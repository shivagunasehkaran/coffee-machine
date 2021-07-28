/**
 * @format
 * @flow strict-local
 */
// react library imports
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
// container imports
import PrimaryContainer from './containers';
// provider imports
import CoffeeProvider from './provider/CoffeeProvider';

const App = (): Node => {
  return (
    <NavigationContainer>
      <CoffeeProvider>
        <PrimaryContainer />
      </CoffeeProvider>
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
