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
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '700',
  },
  subTitle: {
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '500',
  },
  flatListView: {
    backgroundColor: 'green',
    marginVertical: 10,
  },
  renderItem: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'green',
    borderRadius: 8,
  },
});
