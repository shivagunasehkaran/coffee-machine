// library imports
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeTypes.style';

const CoffeeTypes = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.toast_connected}</Text>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeTypes;
