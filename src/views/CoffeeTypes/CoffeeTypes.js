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
        <Text style={styles.title}>{ConstantText.coffee_device_id_title}</Text>
        <Text style={styles.subTitle}>
          {ConstantText.coffee_types_subTitle}
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeTypes;
