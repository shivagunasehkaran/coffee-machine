/**
 * @format
 * @flow strict-local
 */
// react library imports
import React from 'react';
import type {Node} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// style imports
import {styles} from './CoffeeDetails.style';
import * as Images from '../../assets/Images';
// util imports
import {ConstantText} from '../../utills/ConstantText';

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
  let avatar = null;
  if (name === ConstantText.coffee_ristretto) {
    avatar = Images.Images.ristretto;
  } else if (name === ConstantText.coffee_cappuccino) {
    avatar = Images.Images.cappuchino;
  } else if (name === ConstantText.coffee_espresso) {
    avatar = Images.Images.espresso;
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(item)}>
      {avatar && (
        <View style={styles.avatarView}>
          <Image source={avatar} style={styles.avatar} />
        </View>
      )}
      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeDetails;
