/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useEffect, useState, useContext} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
// component imports
import CoffeeDetails from '../../components/CoffeeDetails/CoffeeDetails';
// API imports
import {useFetchCoffeeAPI} from '../../services/Services';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeTypes.style';
// route imports
import * as ROUTES from '../../routes/Routes';
// provider imports
import {CoffeeContext} from '../../provider/CoffeeProvider';

const CoffeeTypes = (props): Node => {
  const {coffeeData, setCoffeeData} = useContext(CoffeeContext);
  const [isLoading, setIsLoading] = useState(false);

  // call API one time when app loads
  useEffect(() => {
    setIsLoading(true);
    getCoffeeDetails();
  }, []);

  // get coffee details using API
  async function getCoffeeDetails() {
    let data = await useFetchCoffeeAPI();
    setCoffeeData(data);
    setIsLoading(false);
  }

  // go to coffee sizes screen
  const goToCoffeeSizes = item => {
    props.navigation.push(ROUTES.pageNameCoffeeSizes);
  };

  // child render item
  const childListRenderItem = ({item, index}) => (
    <CoffeeDetails
      item={item}
      index={index}
      onPress={() => goToCoffeeSizes(item)}
    />
  );

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.coffee_device_id_title}</Text>
        <Text style={styles.subTitle}>
          {ConstantText.coffee_types_style}
        </Text>
        <View style={styles.flatListView}>
          {isLoading && <ActivityIndicator size="large" />}
          <FlatList
            data={coffeeData.types}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeTypes;
