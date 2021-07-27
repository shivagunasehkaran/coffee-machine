// react library imports
import {StyleSheet} from 'react-native';
// style imports
import {ColourPalette} from '../../assets/styles/ColourPalette';
import {ConstantText} from '../../utills/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  title: {
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: ConstantText.font_family,
    fontWeight: ConstantText.font_bold3,
  },
  subTitle: {
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 24,
    fontFamily: ConstantText.font_family,
    fontWeight: ConstantText.font_bold1,
  },
  imageView: {
    alignItems: 'center',
  },
  nfcImage: {
    marginTop: 100,
  },
});
