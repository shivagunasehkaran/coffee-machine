// library imports
import {StyleSheet} from 'react-native';
// styles imports
import {ColourPalette} from '../../assets/styles/ColourPalette';
// utill imports
import {ConstantText} from '../../utills/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 5,
    paddingBottom: 10,
    backgroundColor: ColourPalette.lightGreen,
  },
  secondaryContainer: {
    paddingVertical: 30,
  },
  avatarView: {
    margin: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameView: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  name: {
    color: ColourPalette.white,
    fontSize: 14,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  expandContainer: {
    flex: 1,
    backgroundColor: ColourPalette.lightGreen,
  },
  parentLine: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: ColourPalette.lightGreen,
    marginBottom: 10,
  },
  line: {
    flex: 1,
    backgroundColor: ColourPalette.white,
    height: 1,
    marginHorizontal: 20,
  },
});
