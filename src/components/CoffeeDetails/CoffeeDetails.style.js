import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: ColourPalette.lightGreen,
    borderRadius: 5,
    height: 94,
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
  },
  name: {
    color: ColourPalette.white,
    fontSize: 14,
    fontFamily: 'Avenir Next',
    fontWeight: '600',
  },
});
