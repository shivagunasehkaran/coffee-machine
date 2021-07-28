/**
 * @format
 * @flow strict-local
 */
// react library imports
import type {Node} from 'react';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import * as Images from '../../assets/Images';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// component imports
import NestedChildCoffeeExtras from '../NestedChildCoffeeExtras/NestedChildCoffeeExtras';
// style imports
import {styles} from './ChildCoffeeExtras.style';

type ChildCoffeeExtrasProp = {
  item: Object,
  index: number,
  onPress: Function,
};

// child flatlist render item
const ChildCoffeeExtras = (props: ChildCoffeeExtrasProp): Node => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // getting data from parent
  let items = props.item ? props.item : null;
  let itemIndex = props.index ? props.index : null;
  let selectedItemIndex = props.selectedIndex ? props.selectedIndex : null;
  let name = items ? items.name : '';
  let avatar = null;

  // setting imaged based on props
  if (name === ConstantText.coffee_ristretto) {
    avatar = Images.Images.ristretto;
  } else if (name === ConstantText.coffee_cappuccino) {
    avatar = Images.Images.cappuchino;
  } else if (name === ConstantText.coffee_espresso) {
    avatar = Images.Images.espresso;
  }

  // set index for accordian based in selection
  const setIndexForAccordian = (item, index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  // nested child render item
  const childListRenderItem = ({item, index}) => (
    <NestedChildCoffeeExtras
      item={item}
      index={index}
      onPress={() => setIndexForAccordian(item, index)}
      selectedIndex={selectedIndex}
    />
  );

  // child KeyExtractor
  const keyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress(items, itemIndex)}>
        <View style={styles.secondaryContainer}>
          {avatar && (
            <View style={styles.avatarView}>
              <Image source={avatar} style={styles.avatar} />
            </View>
          )}
          <View style={styles.nameView}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {selectedItemIndex === itemIndex && (
        <View style={styles.expandContainer}>
          <View style={styles.parentLine}>
            <Text style={styles.line} />
          </View>
          <FlatList
            data={items.subselections}
            renderItem={childListRenderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      )}
    </View>
  );
};

export default ChildCoffeeExtras;
