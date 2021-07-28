/**
 * @format
 * @flow strict-local
 */
// react library imports
import type {Node} from 'react';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// style imports
import * as Images from '../../assets/Images';
import {styles} from './NestedChildCoffeeExtras.style';

type NestedChildCoffeeExtrasProp = {
  item: Object,
  index: number,
  onPress: Function,
};

// flatlist render item
const NestedChildCoffeeExtras = (props: NestedChildCoffeeExtrasProp): Node => {
  // getting data from parent
  let items = props.item ? props.item : null;
  let itemIndex = props.index ? props.index : null;
  let selectedItemIndex = props.selectedIndex ? props.selectedIndex : null;
  let name = items ? items.name : '';

  // assigning images
  const unselectedCheckBox = Images.Images.unselectedCheckBox;
  const selectedCheckBox = Images.Images.selectedCheckBox;

  return (
    <TouchableOpacity onPress={() => props.onPress(items, itemIndex)}>
      <View style={styles.container}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            source={
              selectedItemIndex === itemIndex
                ? selectedCheckBox
                : unselectedCheckBox
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NestedChildCoffeeExtras;
