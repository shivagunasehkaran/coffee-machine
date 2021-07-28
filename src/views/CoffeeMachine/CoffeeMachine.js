// library imports
import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
// route imports
import * as ROUTES from '../../routes/Routes';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeMachine.style';
import * as Images from '../../assets/Images';

const CoffeeMachine = props => {
  // Remember the latest callback.
  useEffect(() => {
    // move to choose coffee
    setTimeout(() => {
      props.navigation.push(ROUTES.pageNameCoffeeTypes);
    }, 2000);
    // show toast for device connection
    Toast.show({
      type: ConstantText.toast_success,
      text1: ConstantText.toast_connected,
      position: ConstantText.toast_bottom,
    });
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.coffee_types_size}</Text>
        <Text style={styles.subTitle}>
          {ConstantText.coffee_machine_subTitle}
        </Text>
        <View style={styles.imageView}>
          <Image source={Images.Images.nfcCard} style={styles.nfcImage} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeMachine;
