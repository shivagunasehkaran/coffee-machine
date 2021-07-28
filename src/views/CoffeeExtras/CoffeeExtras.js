/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useContext, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
// component imports
import ChildCoffeeExtras from '../../components/ChildCoffeeExtras';
// provider imports
import {CoffeeContext} from '../../provider/CoffeeProvider';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeExtras.style';

const CoffeeExtras = (props): Node => {
  // get context to access data and bind data
  const {coffeeData} = useContext(CoffeeContext);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // expand the flatlist item
  const renderAccordian = (item, index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  // child render item
  const childListRenderItem = ({item, index}) => (
    <ChildCoffeeExtras
      item={item}
      index={index}
      onPress={() => renderAccordian(item, index)}
      selectedIndex={selectedIndex}
    />
  );

  // child KeyExtractor
  const keyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.coffee_types_subTitle}</Text>
        <View style={styles.flatListView}>
          <FlatList
            data={coffeeData.extras}
            renderItem={childListRenderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeExtras;
