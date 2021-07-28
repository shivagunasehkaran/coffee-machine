/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useContext} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
// route imports
import * as ROUTES from '../../routes/Routes';
// component imports
import CoffeeDetails from '../../components/CoffeeDetails/CoffeeDetails';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeSizes.style';
// provider imports
import {CoffeeContext} from '../../provider/CoffeeProvider';

const CoffeeSizes = (props): Node => {
  // get context to access data and bind data
  const {coffeeData} = useContext(CoffeeContext);

  // go to coffee style screen
  const goToCoffeeStyles = item => {
    props.navigation.push(ROUTES.pageNameCoffeeExtras);
  };

  // child render item
  const childListRenderItem = ({item, index}) => (
    <CoffeeDetails
      item={item}
      index={index}
      onPress={() => goToCoffeeStyles(item)}
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
            data={coffeeData.sizes}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeSizes;
