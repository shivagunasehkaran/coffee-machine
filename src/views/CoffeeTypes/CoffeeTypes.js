// library imports
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// API imports
import {useFetchCoffeeAPI} from '../../services/Services';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeTypes.style';

const CoffeeTypes = props => {
  // call API one time
  useEffect(() => {
    getCoffeeDetails();
  }, []);

  // get coffee details using API
  async function getCoffeeDetails() {
    let data = await useFetchCoffeeAPI();
    console.log('data -- >', data);
  }

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
