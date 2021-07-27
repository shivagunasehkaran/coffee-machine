/**
 * @format
 * @flow strict-local
 */
// react library imports
import React from 'react';
import type {Node} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as Images from '../../assets/Images';
// style imports
import {styles} from './CoffeeDetails.style';

type CoffeeDetailsProp = {
  item: Object,
  index: number,
  onPress: Function,
};

// flatlist render item
const CoffeeDetails = (props: CoffeeDetailsProp): Node => {
  // getting data from parent
  let item = props.item ? props.item : null;
  let name = item ? item.name : '';
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(item)}>
      <View style={styles.avatarView}>
        <Image source={Images.Images.lungo_medium} style={styles.avatar} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeDetails;
