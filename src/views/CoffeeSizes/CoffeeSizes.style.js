// react library imports
import {StyleSheet} from 'react-native';
// style imports
import {ColourPalette} from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  title: {
    marginTop: 10,
    paddingLeft: 17,
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '500',
  },
  flatListView: {
    marginVertical: 10,
    marginHorizontal: 14,
  },
});
