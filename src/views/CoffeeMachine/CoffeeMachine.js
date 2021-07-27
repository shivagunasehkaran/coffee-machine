// library imports
import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
// util imports
import {ConstantText} from '../../utills/ConstantText';
// style imports
import {styles} from './CoffeeMachine.style';
import * as Images from '../../assets/Images';

const CoffeeMachine = props => {
  // Remember the latest callback.
  useEffect(() => {
    Toast.show({
      type: ConstantText.toast_success,
      text1: ConstantText.toast_connected,
      position: ConstantText.toast_bottom,
    });
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.nfc_title}</Text>
        <Text style={styles.subTitle}>{ConstantText.nfc_subTitle}</Text>
        <View style={styles.imageView}>
          <Image source={Images.Images.nfcCard} style={styles.nfcImage} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeMachine;
