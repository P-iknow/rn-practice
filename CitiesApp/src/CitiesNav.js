import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {colors} from './theme';
import Cities from './Cities/Cities';
import City from './Cities/City';

const Stack = createStackNavigator();

function CitiesNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="City" component={City} />
    </Stack.Navigator>
  );
}

export default CitiesNav;
