/**
 * @format
 * @flow strict-local
 */
// react library imports
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
// container component
import PrimaryContainer from './containers';

const App = (): Node => {
  return (
    <NavigationContainer>
      <PrimaryContainer />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
