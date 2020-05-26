import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Browser} from '../screens';

const Stack = createStackNavigator();

export default function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: 'blue',
          }}
        />
        <Stack.Screen
          name="Browser"
          component={Browser}
          options={({route}) => ({
            title: route.params.title,
            headerTintColor: 'green',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
