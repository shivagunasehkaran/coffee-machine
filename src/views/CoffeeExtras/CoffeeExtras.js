/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useContext} from 'react';
import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
// component imports
import CoffeeDetails from '../../components/CoffeeDetails/CoffeeDetails';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeExtras.style';
// provider imports
import {CoffeeContext} from '../../provider/CoffeeProvider';

const CoffeeExtras = (props): Node => {
  // get context to access data and bind data
  const {coffeeData} = useContext(CoffeeContext);

  // expand the flatlist item
  const expandCoffeeExtras = item => {
    Alert.alert(item.name);
  };

  // child render item
  const childListRenderItem = ({item, index}) => (
    <CoffeeDetails
      item={item}
      index={index}
      onPress={() => expandCoffeeExtras(item)}
    />
  );

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.coffee_types_subTitle}</Text>
        <View style={styles.flatListView}>
          <FlatList
            data={coffeeData.extras}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeExtras;
