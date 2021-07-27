/**
 * @format
 * @flow strict-local
 */

// library imports
import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
// API imports
import {useFetchCoffeeAPI} from '../../services/Services';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeTypes.style';

const CoffeeTypes = (): Node => {
  const [coffeeData, setCoffeeData] = useState([]);

  // call API one time
  useEffect(() => {
    getCoffeeDetails();
  }, []);

  // get coffee details using API
  async function getCoffeeDetails() {
    let data = await useFetchCoffeeAPI();
    setCoffeeData(data.types);
  }

  // flat list render item
  const renderRow = items => {
    const item = items.item;
    return (
      <View style={styles.renderItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.coffee_device_id_title}</Text>
        <Text style={styles.subTitle}>
          {ConstantText.coffee_types_subTitle}
        </Text>
        <View style={styles.flatListView}>
          <FlatList
            data={coffeeData}
            renderItem={renderRow}
            keyExtractor={childListKeyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeTypes;
