// react library imports
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// presentational component imports
import * as ROUTES from './Routes';
import CoffeeMachine from '../views/CoffeeMachine';
import CoffeeTypes from '../views/CoffeeTypes';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator>
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
    </PublicStack.Navigator>
  );
};
