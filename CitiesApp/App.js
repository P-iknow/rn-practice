import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CitiesNav from './src/CitiesNav';
import AddCity from './src/AddCity/AddCity';
import {CitiesProvider} from './src/context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CitiesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities" component={CitiesNav} />
          <Tab.Screen name="AddCity" component={AddCity} />
        </Tab.Navigator>
      </NavigationContainer>
    </CitiesProvider>
  );
}
