// react library imports
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// presentational component imports
import CoffeeMachine from '../views/CoffeeMachine';
import CoffeeTypes from '../views/CoffeeTypes';
import CoffeeSizes from '../views/CoffeeSizes';
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
          fontWeight: ConstantText.font_bold,
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
        }}
      />
    </PublicStack.Navigator>
  );
};
