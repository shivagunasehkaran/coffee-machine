// react library imports
import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';
// style imports
import {styles} from './CoffeeMachine.style';
import * as Images from '../../assets/Images';
// util imports
import {ConstantText} from '../../utills/ConstantText';

const CoffeeMachine = props => {
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
