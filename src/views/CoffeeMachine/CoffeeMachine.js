// react library imports
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './CoffeeMachine.style';

const CoffeeMachine = props => {
  return (
    <View style={styles.container}>
      <Text>{'Coffee Machine'}</Text>
    </View>
  );
};

export default CoffeeMachine;
