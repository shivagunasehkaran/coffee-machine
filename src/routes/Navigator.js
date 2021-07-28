// react library imports
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// presentational component imports
import CoffeeMachine from '../views/CoffeeMachine';
import CoffeeTypes from '../views/CoffeeTypes';
import CoffeeSizes from '../views/CoffeeSizes';
import CoffeeExtras from '../views/CoffeeExtras';
// style imports
import {ColourPalette} from '../assets/styles/ColourPalette';
// route imports
import * as ROUTES from './Routes';
// util  imports
import {ConstantText} from '../utills/ConstantText';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerTintColor: ColourPalette.black,
        headerBackTitleStyle: {
          fontSize: 16,
          fontFamily: ConstantText.font_family,
          fontWeight: ConstantText.font_bold3,
        },
      }}>
      <PublicStack.Screen
        key={ROUTES.pageNameCoffeeMachine}
        name={ROUTES.pageNameCoffeeMachine}
        component={CoffeeMachine}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        key={ROUTES.pageNameCoffeeTypes}
        name={ROUTES.pageNameCoffeeTypes}
        component={CoffeeTypes}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        key={ROUTES.pageNameCoffeeSizes}
        name={ROUTES.pageNameCoffeeSizes}
        component={CoffeeSizes}
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: ConstantText.coffee_device_id_title,
          headerTitle:
            Platform.OS === ConstantText.platform_android
              ? ConstantText.coffee_device_id_title
              : null,
        }}
      />
      <PublicStack.Screen
        key={ROUTES.pageNameCoffeeExtras}
        name={ROUTES.pageNameCoffeeExtras}
        component={CoffeeExtras}
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: ConstantText.coffee_device_id_title,
          headerTitle:
            Platform.OS === ConstantText.platform_android
              ? ConstantText.coffee_device_id_title
              : null,
        }}
      />
    </PublicStack.Navigator>
  );
};
