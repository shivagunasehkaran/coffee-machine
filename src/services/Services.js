import {GET_URL} from './Constants';
import Toast from 'react-native-toast-message';
import {ConstantText} from '../utills/ConstantText';

export async function useFetchCoffeeAPI() {
  const url = GET_URL.COFFEE_DETAILS_URL;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(err => {
      // show toast for network failure
      return Toast.show({
        type: ConstantText.toast_error,
        text1: ConstantText.network_failure,
        position: ConstantText.toast_bottom,
      });
    });
}
